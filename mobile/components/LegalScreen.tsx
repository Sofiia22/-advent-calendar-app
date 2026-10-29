import { router } from 'expo-router';
import { Pressable, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LEGAL_CONTENT } from '../data/legal';
import { useAdvent } from '../state/AdventContext';
export function LegalScreen({ kind }: { kind: 'privacy' | 'support' }) {
  const { selectedLanguage } = useAdvent();
  const copy = LEGAL_CONTENT[selectedLanguage];
  return <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8E8' }}><ScrollView contentContainerStyle={{ padding: 24, maxWidth: 720, alignSelf: 'center', width: '100%' }}>
    <Pressable accessibilityRole="button" onPress={() => router.canGoBack() ? router.back() : router.replace('/settings')}><Text style={{ paddingVertical: 16, color: '#101A3A' }}>‹ {copy.back}</Text></Pressable>
    <Text style={{ fontSize: 28, color: '#101A3A', marginBottom: 24 }}>{kind === 'privacy' ? copy.privacyTitle : copy.supportTitle}</Text>
    {copy[kind].map(text => <Text key={text} style={{ fontSize: 17, lineHeight: 27, marginBottom: 18, color: '#243047' }}>{text}</Text>)}
  </ScrollView></SafeAreaView>;
}
