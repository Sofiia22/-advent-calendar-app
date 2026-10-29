import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function prepareNotifications() {
  if (Platform.OS === 'web') return false;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("daily-reminders", {
      name: "Daily Advent reminders",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  const currentPermission = await Notifications.getPermissionsAsync();

  if (currentPermission.status === "granted") {
    return true;
  }

  const requestedPermission = await Notifications.requestPermissionsAsync();

  return requestedPermission.status === "granted";
}

export async function scheduleDailyReminder(
  hour: number,
  minute: number,
  copy: { title: string; body: string },
) {
  const hasPermission = await prepareNotifications().catch(() => false);

  if (!hasPermission) {
    return null;
  }

  return Notifications.scheduleNotificationAsync({
    content: {
      title: copy.title,
      body: copy.body,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  }).catch(() => null);
}
export async function scheduleTestNotification(copy: { title: string; body: string }) {
  const hasPermission = await prepareNotifications().catch(() => false);

  if (!hasPermission) {
    return false;
  }

  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: copy.title,
      body: copy.body,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
    },
  }).catch(() => null);

  return identifier !== null;
}
export async function cancelReminder(identifier: string) {
  if (Platform.OS !== 'web') await Notifications.cancelScheduledNotificationAsync(identifier).catch(() => {});
}
