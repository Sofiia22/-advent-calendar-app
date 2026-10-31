import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";
import { Alert, AppState, Platform } from 'react-native';
import { TESTING_UNLOCK } from '../config/testing';
import { useReviewerAccess } from '../web/reviewerAccess';
import { addCompletedDay, availableDayFor, canOpenDay, parseCompletedDays, unlockedDay } from './progress';

export type LanguageId = "en" | "uk" | "ru";

type AdventContextValue = {
  selectedLanguage: LanguageId;
  completedDays: number[];
  currentDay: number;
  availableDay: number;
  canOpenDay: (day: number) => boolean;
  isHydrated: boolean;
  isOnboarded: boolean;
  isPreview: boolean;
  reviewAuthorized: boolean;
  setPreview: (enabled: boolean) => void;
  setLanguage: (language: LanguageId) => Promise<void>;
  finishOnboarding: () => Promise<void>;
  completeDay: (day: number) => Promise<void>;
  isDayCompleted: (day: number) => boolean;
  resetProgress: () => Promise<void>;
};

type AdventProviderProps = {
  children: ReactNode;
};

const LANGUAGE_KEY = "@advent/language";
const COMPLETED_DAYS_KEY = "@advent/completed-days";
const ONBOARDED_KEY = "@advent/onboarded";

function getDeviceLanguage(): LanguageId {
  try {
    const code = Intl.DateTimeFormat().resolvedOptions().locale.toLowerCase();
    if (code.startsWith("en")) return "en";
    if (code.startsWith("ru")) return "ru";
  } catch {
    // Ukrainian remains the product fallback when device locale is unavailable.
  }
  return "uk";
}

const DEFAULT_LANGUAGE: LanguageId = getDeviceLanguage();
const DEFAULT_COMPLETED_DAYS: number[] = [];

const AdventContext = createContext<AdventContextValue | undefined>(undefined);

function isLanguage(value: string | null): value is LanguageId {
  return value === "en" || value === "uk" || value === "ru";
}

export function AdventProvider({ children }: AdventProviderProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageId>(DEFAULT_LANGUAGE);

  const [completedDays, setCompletedDays] = useState<number[]>(
    DEFAULT_COMPLETED_DAYS,
  );

  const [isHydrated, setIsHydrated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  // Review/demo access is explicit and session-only; never changes saved progress.
  const [previewRequested, setPreview] = useState(false);
  const reviewAuthorized = useReviewerAccess();
  const isPreview = previewRequested && reviewAuthorized;
  const [availableDay, setAvailableDay] = useState(() => TESTING_UNLOCK ? 24 : unlockedDay());
  const completedRef = useRef<number[]>([]);
  const storageLoaded = useRef(false);
  const writeQueue = useRef(Promise.resolve());
  useEffect(() => {
    const refresh = () => setAvailableDay(TESTING_UNLOCK ? 24 : unlockedDay());
    const subscription = AppState.addEventListener('change', state => { if (state === 'active') refresh(); });
    const timer = setInterval(refresh, 60000);
    return () => { subscription.remove(); clearInterval(timer); };
  }, []);

  useEffect(() => {
    const loadStoredState = async () => {
      try {
        const storedValues = await AsyncStorage.multiGet([
          LANGUAGE_KEY,
          COMPLETED_DAYS_KEY,
          ONBOARDED_KEY,
        ]);

        const storedLanguage = storedValues[0][1];
        const storedCompletedDays = storedValues[1][1];
        const storedOnboarded = storedValues[2][1];

        if (isLanguage(storedLanguage)) {
          setSelectedLanguage(storedLanguage);
        }

        completedRef.current = parseCompletedDays(storedCompletedDays);
        setCompletedDays(completedRef.current);
        setIsOnboarded(storedOnboarded === "true");
        storageLoaded.current = true;
      } catch (error) {
        console.warn("Could not load Advent progress:", error);
      } finally {
        setIsHydrated(true);
      }
    };

    void loadStoredState();
  }, []);

  const finishOnboarding = useCallback(async () => {
    setIsOnboarded(true);
    try {
      await AsyncStorage.setItem(ONBOARDED_KEY, "true");
    } catch (error) {
      console.warn("Could not save onboarding state:", error);
    }
  }, []);

  const setLanguage = useCallback(async (language: LanguageId) => {
    setSelectedLanguage(language);

    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.warn("Could not save language:", error);
    }
  }, []);

  const completeDay = useCallback((day: number) => {
    if (isPreview) return Promise.resolve();
    writeQueue.current = writeQueue.current.then(async () => {
      if (!storageLoaded.current) {
        Alert.alert(selectedLanguage === 'uk' ? 'Сховище недоступне. Перезапустіть застосунок перед збереженням прогресу.' : selectedLanguage === 'ru' ? 'Хранилище недоступно. Перезапустите приложение перед сохранением прогресса.' : 'Storage is unavailable. Restart the app before saving progress.');
        return;
      }
      const next = addCompletedDay(completedRef.current, day, TESTING_UNLOCK ? 24 : availableDayFor(Platform.OS, completedRef.current));
      try {
        await AsyncStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(next));
        completedRef.current = next;
        setCompletedDays(next);
      } catch {
        const message = selectedLanguage === 'uk' ? 'Не вдалося зберегти прогрес. Спробуйте ще раз.' : selectedLanguage === 'ru' ? 'Не удалось сохранить прогресс. Попробуйте ещё раз.' : 'Progress could not be saved. Please try again.';
        Alert.alert(message);
      }
    });
    return writeQueue.current;
  }, [selectedLanguage, isPreview]);
  const isDayCompleted = useCallback(
    (day: number) => completedDays.includes(day),
    [completedDays],
  );

  const resetProgress = useCallback(async () => {
    await writeQueue.current;
    try {
      await AsyncStorage.removeItem(COMPLETED_DAYS_KEY);
      completedRef.current = [];
      setCompletedDays([]);
    } catch {
      Alert.alert(selectedLanguage === 'uk' ? 'Не вдалося скинути прогрес.' : selectedLanguage === 'ru' ? 'Не удалось сбросить прогресс.' : 'Progress could not be reset.');
    }
  }, [selectedLanguage]);

  const firstIncomplete =
    Array.from({ length: 24 }, (_, index) => index + 1).find(
      (day) => !completedDays.includes(day),
    ) ?? 24;
  const currentDay = firstIncomplete;
  const effectiveAvailableDay = Platform.OS === 'web' ? availableDayFor('web', completedDays) : availableDay;
  const canOpen = useCallback((day: number) => canOpenDay(day, completedDays, effectiveAvailableDay, TESTING_UNLOCK || isPreview), [completedDays, effectiveAvailableDay, isPreview]);

  const value = useMemo<AdventContextValue>(
    () => ({
      selectedLanguage,
      completedDays,
      currentDay,
      availableDay: isPreview || TESTING_UNLOCK ? 24 : effectiveAvailableDay,
      isPreview,
      reviewAuthorized,
      setPreview,
      canOpenDay: canOpen,
      isHydrated,
      isOnboarded,
      setLanguage,
      finishOnboarding,
      completeDay,
      isDayCompleted,
      resetProgress,
    }),
    [
      selectedLanguage,
      completedDays,
      currentDay,
      effectiveAvailableDay,
      isPreview,
      reviewAuthorized,
      canOpen,
      isHydrated,
      isOnboarded,
      setLanguage,
      finishOnboarding,
      completeDay,
      isDayCompleted,
      resetProgress,
    ],
  );

  return (
    <AdventContext.Provider value={value}>{children}</AdventContext.Provider>
  );
}

export function useAdvent() {
  const context = useContext(AdventContext);

  if (!context) {
    throw new Error("useAdvent must be used inside AdventProvider");
  }

  return context;
}
