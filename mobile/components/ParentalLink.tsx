import { ReactNode, useState } from 'react';
import { Alert, Linking, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAdvent } from '../state/AdventContext';

/** External destinations are opened only after an adult completes the gate. */
export function ParentalLink({ url, children, style }: { url: string; children: ReactNode; style?: import('react-native').StyleProp<import('react-native').ViewStyle> }) {
  const { selectedLanguage } = useAdvent();
  const [question, setQuestion] = useState<[number, number] | null>(null);
  const [answer, setAnswer] = useState('');
  const copy = {
    uk: { title: 'Для батьків', body: 'Зовнішнє посилання відкриє інший сервіс з власними правилами приватності. Попросіть дорослого розв’язати приклад:', open: 'Відкрити', cancel: 'Скасувати', error: 'Не вдалося відкрити посилання.', answer: 'Відповідь' },
    en: { title: 'For parents', body: 'This link opens another service with its own privacy policy. Please ask an adult to solve:', open: 'Open link', cancel: 'Cancel', error: 'The link could not be opened.', answer: 'Answer' },
    ru: { title: 'Для родителей', body: 'Ссылка откроет другой сервис с собственными правилами приватности. Попросите взрослого решить пример:', open: 'Открыть', cancel: 'Отмена', error: 'Не удалось открыть ссылку.', answer: 'Ответ' },
  }[selectedLanguage];
  const close = () => { setQuestion(null); setAnswer(''); };
  const open = async () => {
    if (!question || Number(answer) !== question[0] * question[1]) { setAnswer(''); return; }
    close();
    try { await Linking.openURL(url); } catch { Alert.alert(copy.error); }
  };
  return <>
    <Pressable accessibilityRole="button" onPress={() => { setAnswer(''); setQuestion([12 + Math.floor(Math.random() * 8), 12 + Math.floor(Math.random() * 8)]); }} style={style}>{children}</Pressable>
    <Modal transparent visible={question !== null} animationType="fade" onRequestClose={close}>
      <View style={styles.backdrop}><View style={styles.card} accessibilityViewIsModal>
        <Text style={styles.title}>{copy.title}</Text><Text style={styles.body}>{copy.body}</Text>
        <Text style={styles.title}>{question?.[0]} × {question?.[1]} = ?</Text>
        <TextInput accessibilityLabel={copy.answer} value={answer} onChangeText={setAnswer} keyboardType="number-pad" maxLength={4} style={styles.input} />
        <Pressable accessibilityRole="button" onPress={() => void open()} style={styles.button}><Text>{copy.open}</Text></Pressable>
        <Pressable accessibilityRole="button" onPress={close} style={styles.button}><Text>{copy.cancel}</Text></Pressable>
      </View></View>
    </Modal>
  </>;
}
const styles = StyleSheet.create({ backdrop: { flex: 1, backgroundColor: '#0009', justifyContent: 'center', padding: 24 }, card: { padding: 24, borderRadius: 20, backgroundColor: '#FFF8E8', maxWidth: 460, width: '100%', alignSelf: 'center' }, title: { fontSize: 24, color: '#101A3A', marginBottom: 14 }, body: { fontSize: 16, lineHeight: 24, marginBottom: 16 }, input: { borderWidth: 1, borderColor: '#99792D', borderRadius: 8, padding: 12, fontSize: 22 }, button: { backgroundColor: '#EBD297', padding: 16, marginTop: 14, borderRadius: 10, alignItems: 'center' } });
