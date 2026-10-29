const crypto=require('node:crypto');
const COOKIE='__Host-advent-review';
const equal=(a,b)=>crypto.timingSafeEqual(crypto.createHash('sha256').update(a).digest(),crypto.createHash('sha256').update(b).digest());
const sign=(payload,key)=>crypto.createHmac('sha256',key).update(payload).digest('base64url');
exports.handler=async event=>{
  const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Cookie'};
  const result=(statusCode,body,extra={})=>({statusCode,headers:{...headers,...extra},body:JSON.stringify(body)});
  const password=process.env.REVIEW_PASSWORD||'',key=process.env.REVIEW_SESSION_SECRET||'';
  if(password.length<20||key.length<32)return result(503,{authorized:false,error:'Reviewer access is not configured.'});
  if(event.httpMethod==='GET'){
    const token=(event.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith(COOKIE+'='))?.slice(COOKIE.length+1)||'';
    const [expiry,signature]=token.split('.');
    return result(200,{authorized:Boolean(expiry&&signature&&/^\d+$/.test(expiry)&&Number(expiry)>Date.now()&&equal(signature,sign(expiry,key)))});
  }
  if(event.httpMethod!=='POST')return result(405,{authorized:false});
  const origin=event.headers.origin,host=event.headers.host;
  try{if(!origin||new URL(origin).host!==host)return result(403,{authorized:false});}catch{return result(403,{authorized:false});}
  if((event.body||'').length>2048)return result(413,{authorized:false});
  let supplied;try{supplied=JSON.parse(event.body||'{}').password;}catch{return result(400,{authorized:false});}
  if(typeof supplied!=='string'||!equal(supplied,password))return result(401,{authorized:false,error:'Access denied.'});
  const expiry=String(Date.now()+8*60*60*1000),token=expiry+'.'+sign(expiry,key);
  return result(200,{authorized:true},{'Set-Cookie':`${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=28800`});
};
