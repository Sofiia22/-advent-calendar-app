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
  const hasPermission = await prepareNotifications();

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
  });
}
export async function scheduleTestNotification(copy: { title: string; body: string }) {
  const hasPermission = await prepareNotifications();

  if (!hasPermission) {
    return false;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: copy.title,
      body: copy.body,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 5,
    },
  });

  return true;
}
export async function cancelReminder(identifier: string) {
  await Notifications.cancelScheduledNotificationAsync(identifier);
}
