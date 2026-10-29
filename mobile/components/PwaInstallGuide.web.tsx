import { useEffect,useState } from 'react';
import { Pressable,Text,View } from 'react-native';
import { useAdvent } from '../state/AdventContext';
type InstallEvent=Event&{prompt:()=>Promise<void>;userChoice:Promise<{outcome:string}>};
export function PwaInstallGuide(){
  const {selectedLanguage:l}=useAdvent();const [device,setDevice]=useState('android'),[installed,setInstalled]=useState(false),[prompt,setPrompt]=useState<InstallEvent|null>(null);
  useEffect(()=>{
    setDevice(/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)?'ios':'android');
    setInstalled(matchMedia('(display-mode: standalone)').matches||Boolean((navigator as Navigator&{standalone?:boolean}).standalone));
    const ready=(e:Event)=>{e.preventDefault();setPrompt(e as InstallEvent);};const done=()=>{setInstalled(true);setPrompt(null);};
    window.addEventListener('beforeinstallprompt',ready);window.addEventListener('appinstalled',done);
    return()=>{window.removeEventListener('beforeinstallprompt',ready);window.removeEventListener('appinstalled',done);};
  },[]);
  const text={en:{title:'Install on your phone',ios:'In Safari: Share → Add to Home Screen → Open as Web App → Add.',android:'Browser menu → Install app / Add to Home screen.',installed:'Installed as a web app.',button:'Install app',repair:'Repair offline cache (keep progress)'},uk:{title:'Встановити на телефон',ios:'У Safari: Поширити → На початковий екран → Відкрити як вебзастосунок → Додати.',android:'Меню браузера → Встановити застосунок / Додати на головний екран.',installed:'Встановлено як вебзастосунок.',button:'Встановити',repair:'Відновити офлайн-кеш (зберегти прогрес)'},ru:{title:'Установить на телефон',ios:'В Safari: Поделиться → На экран «Домой» → Открывать как веб-приложение → Добавить.',android:'Меню браузера → Установить приложение / Добавить на главный экран.',installed:'Установлено как веб-приложение.',button:'Установить',repair:'Восстановить офлайн-кеш (сохранить прогресс)'}}[l];
  const repair=async()=>{if(!navigator.onLine)return;for(const r of await navigator.serviceWorker?.getRegistrations()||[])if(r.scope===location.origin+'/')await r.unregister();for(const name of await caches.keys())if(name.startsWith('advent-shell-')||name.startsWith('advent-runtime-'))await caches.delete(name);location.reload();};
  return <View style={{padding:18,marginTop:18,backgroundColor:'#fff',borderRadius:18,gap:12}}><Text style={{fontSize:20,color:'#101A3A'}}>{text.title}</Text><Text>{installed?text.installed:device==='ios'?text.ios:text.android}</Text>
    {!installed&&device!=='ios'&&prompt&&<Pressable accessibilityRole="button" onPress={async()=>{await prompt.prompt();await prompt.userChoice;setPrompt(null);}}><Text>{text.button}</Text></Pressable>}
    <Pressable accessibilityRole="button" onPress={()=>void repair()}><Text style={{textDecorationLine:'underline'}}>{text.repair}</Text></Pressable>
  </View>;
}
