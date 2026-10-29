import { useEffect, useState } from 'react';
export function useReviewerAccess() {
  const [authorized,setAuthorized]=useState(false);
  useEffect(()=>{
    let cancelled=false,controller:AbortController|undefined,active=location.pathname==='/review';
    try{active=active||sessionStorage.getItem('advent-review-session')==='1';}catch{/* Cookie authorization still works when optional session storage is blocked. */}
    const check=async()=>{
      controller?.abort();controller=new AbortController();
      try{const response=await fetch('/.netlify/functions/review',{cache:'no-store',credentials:'same-origin',signal:controller.signal});const data=await response.json();if(!cancelled){const valid=response.ok&&data.authorized===true;setAuthorized(valid);if(!valid){active=false;try{sessionStorage.removeItem('advent-review-session');}catch{}}}}
      catch{if(!cancelled)setAuthorized(false);}
    };
    if(active)void check();const timer=setInterval(()=>{if(active)void check();},60000);
    const refresh=()=>{active=true;void check();},online=()=>{if(active)void check();};window.addEventListener('advent-review-authorized',refresh);window.addEventListener('online',online);
    return()=>{cancelled=true;controller?.abort();clearInterval(timer);window.removeEventListener('advent-review-authorized',refresh);window.removeEventListener('online',online);};
  },[]);
  return authorized;
}
