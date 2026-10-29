import type { ErrorBoundaryProps } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
export function AppErrorBoundary({ retry }: ErrorBoundaryProps) {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const message = locale.startsWith('uk') ? 'Не вдалося відкрити екран. Спробуйте ще раз. Збережений прогрес не скинуто.' : locale.startsWith('ru') ? 'Не удалось открыть экран. Попробуйте ещё раз. Сохранённый прогресс не сброшен.' : 'This screen could not be opened. Please try again. Saved progress has not been reset.';
  const button = locale.startsWith('uk') ? 'Спробувати ще раз' : locale.startsWith('ru') ? 'Попробовать ещё раз' : 'Try again';
  return <View style={{flex:1,backgroundColor:'#101A3A',justifyContent:'center',padding:30}}><Text style={{color:'#FFF2CF',fontSize:20,lineHeight:30}}>{message}</Text><Pressable accessibilityRole="button" onPress={() => void retry()} style={{marginTop:24,padding:18,borderRadius:12,backgroundColor:'#F6D991'}}><Text>{button}</Text></Pressable></View>;
}
