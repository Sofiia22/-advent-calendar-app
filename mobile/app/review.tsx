import { useEffect,useState } from 'react';
import { Platform,Pressable,Text,TextInput,View } from 'react-native';
import { router } from 'expo-router';
import { useAdvent } from '../state/AdventContext';
export default function ReviewAccess(){
  const {selectedLanguage:l,reviewAuthorized,setPreview}=useAdvent();const [password,setPassword]=useState(''),[message,setMessage]=useState(''),[busy,setBusy]=useState(false);
  useEffect(()=>{if(Platform.OS==='web')window.dispatchEvent(new Event('advent-review-authorized'));},[]);
  const text={en:{title:'Authorized reviewer access',body:'Use the private review password supplied by the publisher. No account is needed for normal reading.',submit:'Authorize',open:'Open all 24 days',error:'Could not authorize. Check the password and internet connection.',back:'Back'},uk:{title:'Доступ для авторизованих рецензентів',body:'Введіть приватний пароль від видавця. Для звичайного читання акаунт не потрібен.',submit:'Підтвердити доступ',open:'Відкрити всі 24 дні',error:'Не вдалося підтвердити доступ. Перевірте пароль та інтернет.',back:'Назад'},ru:{title:'Доступ для авторизованных рецензентов',body:'Введите приватный пароль от издателя. Для обычного чтения аккаунт не нужен.',submit:'Подтвердить доступ',open:'Открыть все 24 дня',error:'Не удалось подтвердить доступ. Проверьте пароль и интернет.',back:'Назад'}}[l];
  const authorize=async()=>{setBusy(true);setMessage('');try{const response=await fetch('/.netlify/functions/review',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({password})});if(!response.ok)throw new Error('Denied');setPassword('');try{sessionStorage.setItem('advent-review-session','1');}catch{}window.dispatchEvent(new Event('advent-review-authorized'));}catch{setMessage(text.error);}finally{setBusy(false);}};
  return <View style={{flex:1,justifyContent:'center',padding:24,backgroundColor:'#fff8e8',gap:20}}><Text style={{fontSize:24,color:'#101A3A'}}>{text.title}</Text><Text>{text.body}</Text>
    {Platform.OS==='web'&&!reviewAuthorized&&<><TextInput accessibilityLabel="Reviewer password" placeholder="Reviewer password" value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" autoCorrect={false} maxLength={256} style={{padding:16,borderWidth:1,borderColor:'#101A3A',borderRadius:12}}/><Pressable accessibilityRole="button" disabled={busy||!password} onPress={()=>void authorize()}><Text>{text.submit}</Text></Pressable></>}
    {reviewAuthorized&&<Pressable accessibilityRole="button" onPress={()=>{setPreview(true);router.replace('/home');}}><Text>{text.open}</Text></Pressable>}
    {!!message&&<Text accessibilityLiveRegion="polite">{message}</Text>}
    <Pressable accessibilityRole="button" onPress={()=>router.replace('/home')}><Text>{text.back}</Text></Pressable>
  </View>;
}
