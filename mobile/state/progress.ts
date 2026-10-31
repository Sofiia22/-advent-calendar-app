import { ADVENT_CONFIG } from '../config/advent';

export function parseCompletedDays(value: string | null): number[] {
  try {
    const parsed: unknown = value ? JSON.parse(value) : [];
    return Array.isArray(parsed) ? [...new Set(parsed.filter((day): day is number => typeof day === 'number' && Number.isInteger(day) && day >= 1 && day <= 24))].sort((a, b) => a - b) : [];
  } catch { return []; }
}

export function unlockedDay(now = new Date()): number {
  const { startYear, startMonth, startDay, dayCount } = ADVENT_CONFIG;
  const localDay = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const start = Date.UTC(startYear, startMonth - 1, startDay);
  return Math.max(0, Math.min(dayCount, Math.floor((localDay - start) / 86400000) + 1));
}

// Only a contiguous run of completed stories unlocks the next web story.
export function progressUnlockedDay(completed: readonly number[]): number {
  for (let day = 1; day <= 24; day++) if (!completed.includes(day)) return day;
  return 24;
}

export function availableDayFor(platform: string, completed: readonly number[], now = new Date()): number {
  return platform === 'web' ? progressUnlockedDay(completed) : unlockedDay(now);
}

export function canOpenDay(day: number, completed: readonly number[], unlocked: number, testing = false): boolean {
  return Number.isInteger(day) && day >= 1 && day <= 24 && (testing || completed.includes(day) || day <= unlocked);
}

export function addCompletedDay(completed: readonly number[], day: number, unlocked: number, testing = false): number[] {
  return canOpenDay(day, completed, unlocked, testing) ? parseCompletedDays(JSON.stringify([...completed, day])) : [...completed];
}
