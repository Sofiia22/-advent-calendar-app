import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type LanguageId = "en" | "uk" | "ru";

type AdventContextValue = {
  selectedLanguage: LanguageId;
  completedDays: number[];
  currentDay: number;
  isHydrated: boolean;
  isOnboarded: boolean;
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

function parseCompletedDays(value: string | null): number[] {
  if (!value) {
    return DEFAULT_COMPLETED_DAYS;
  }

  try {
    const parsed: unknown = JSON.parse(value);

    if (!Array.isArray(parsed)) {
      return DEFAULT_COMPLETED_DAYS;
    }

    return parsed
      .filter(
        (day): day is number =>
          typeof day === "number" &&
          Number.isInteger(day) &&
          day >= 1 &&
          day <= 24,
      )
      .filter((day, index, days) => days.indexOf(day) === index)
      .sort((a, b) => a - b);
  } catch {
    return DEFAULT_COMPLETED_DAYS;
  }
}

export function AdventProvider({ children }: AdventProviderProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageId>(DEFAULT_LANGUAGE);

  const [completedDays, setCompletedDays] = useState<number[]>(
    DEFAULT_COMPLETED_DAYS,
  );

  const [isHydrated, setIsHydrated] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);

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

        setCompletedDays(parseCompletedDays(storedCompletedDays));
        setIsOnboarded(storedOnboarded === "true");
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

  const completeDay = useCallback(async (day: number) => {
    const firstIncomplete = Array.from({ length: 24 }, (_, index) => index + 1)
      .find((candidate) => !completedDays.includes(candidate)) ?? 24;
    const nextCompletedDays = day > firstIncomplete || completedDays.includes(day)
      ? completedDays
      : [...completedDays, day].sort((a, b) => a - b);

    setCompletedDays(nextCompletedDays);

    try {
      await AsyncStorage.setItem(COMPLETED_DAYS_KEY, JSON.stringify(nextCompletedDays));
    } catch (error) {
      console.warn("Could not save Advent progress:", error);
    }
  }, [completedDays]);
  const isDayCompleted = useCallback(
    (day: number) => completedDays.includes(day),
    [completedDays],
  );

  const resetProgress = useCallback(async () => {
    setCompletedDays(DEFAULT_COMPLETED_DAYS);

    try {
      await AsyncStorage.removeItem(COMPLETED_DAYS_KEY);
    } catch (error) {
      console.warn("Could not reset Advent progress:", error);
    }
  }, []);

  const currentDay =
    Array.from({ length: 24 }, (_, index) => index + 1).find(
      (day) => !completedDays.includes(day),
    ) ?? 24;

  const value = useMemo<AdventContextValue>(
    () => ({
      selectedLanguage,
      completedDays,
      currentDay,
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
