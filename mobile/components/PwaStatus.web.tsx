import { useEffect,useRef,useState } from 'react';
import { Pressable,Text,View } from 'react-native';
import { useAdvent } from '../state/AdventContext';
export function PwaStatus(){
  const {selectedLanguage:l}=useAdvent();const [offline,setOffline]=useState(false),[waiting,setWaiting]=useState<ServiceWorker|null>(null),[cacheError,setCacheError]=useState(false);const accepted=useRef(false);
  useEffect(()=>{
    let disposed=false,registration:ServiceWorkerRegistration|undefined;
    const network=()=>{setOffline(!navigator.onLine);if(navigator.onLine)void fetch('/pwa-version.json',{cache:'no-store'}).then(r=>{if(!disposed)setOffline(!r.ok);}).catch(()=>{if(!disposed)setOffline(true);});},changed=()=>{if(accepted.current)location.reload();};network();
    const message=(event:MessageEvent)=>{if(event.data?.type==='OFFLINE_FALLBACK')setOffline(true);};
    const update=()=>{if(registration?.waiting)setWaiting(registration.waiting);};
    const found=()=>{const worker=registration?.installing;if(worker){const listener=()=>{if(disposed)return;if(worker.state==='installed'&&navigator.serviceWorker.controller)update();if(worker.state==='redundant')setCacheError(true);};worker.addEventListener('statechange',listener);cleanups.push(()=>worker.removeEventListener('statechange',listener));}};
    const cleanups:(()=>void)[]=[];
    window.addEventListener('online',network);window.addEventListener('offline',network);
    if('serviceWorker' in navigator){navigator.serviceWorker.addEventListener('controllerchange',changed);navigator.serviceWorker.addEventListener('message',message);navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'}).then(r=>{if(disposed)return;registration=r;update();r.addEventListener('updatefound',found);found();if(navigator.onLine)void r.update().catch(()=>{});}).catch(()=>{if(!disposed)setCacheError(true);});}else setCacheError(true);
    const timer=setInterval(()=>{if(navigator.onLine)void registration?.update().catch(()=>{});},15*60000);
    return()=>{disposed=true;clearInterval(timer);for(const clean of cleanups)clean();registration?.removeEventListener('updatefound',found);window.removeEventListener('online',network);window.removeEventListener('offline',network);navigator.serviceWorker?.removeEventListener('controllerchange',changed);navigator.serviceWorker?.removeEventListener('message',message);};
  },[]);
  const text={en:{offline:'Offline: saved content is available. Reconnect for missing illustrations.',update:'An update is ready. Your progress will be kept.',button:'Update now',error:'Offline caching is unavailable. You can continue online.'},uk:{offline:'Без інтернету: збережений вміст доступний. Для відсутніх ілюстрацій підключіться до мережі.',update:'Готове оновлення. Ваш прогрес буде збережено.',button:'Оновити',error:'Офлайн-кеш недоступний. Можна продовжити онлайн.'},ru:{offline:'Без интернета: сохранённый контент доступен. Для недостающих иллюстраций подключитесь к сети.',update:'Готово обновление. Ваш прогресс сохранится.',button:'Обновить',error:'Офлайн-кеш недоступен. Можно продолжить онлайн.'}}[l];
  if(!offline&&!waiting&&!cacheError)return null;
  return <View accessibilityLiveRegion="polite" style={{padding:12,paddingTop:16,backgroundColor:'#fff1c9'}}><Text style={{color:'#101A3A'}}>{offline?text.offline:waiting?text.update:text.error}</Text>{waiting&&!offline&&<Pressable accessibilityRole="button" onPress={()=>{accepted.current=true;waiting.postMessage({type:'ACTIVATE_UPDATE'});}} style={{padding:10}}><Text>{text.button}</Text></Pressable>}</View>;
}
