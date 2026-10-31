const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { load } = require('./ts-loader.cjs');
const { parseCompletedDays, unlockedDay, canOpenDay, addCompletedDay, availableDayFor } = load(path.join(__dirname,'../state/progress.ts'));
test('web starts immediately and unlocks only after contiguous completion',()=>{
  const before=new Date(2026,9,31);
  assert.equal(availableDayFor('web',[],before),1);
  assert.equal(availableDayFor('web',[1],before),2);
  assert.equal(availableDayFor('web',[1,3,24],before),2);
  assert.equal(availableDayFor('web',Array.from({length:24},(_,i)=>i+1),before),24);
  assert.equal(availableDayFor('ios',[1,2],before),0);
  assert.equal(availableDayFor('android',[],new Date(2026,11,5)),5);
  let completed=[];
  for(let day=1;day<=24;day++) {
    const unlocked=availableDayFor('web',completed,before);
    assert.equal(canOpenDay(day,completed,unlocked),true);
    if(day<24) assert.equal(canOpenDay(day+1,completed,unlocked),false);
    completed=Array.from(addCompletedDay(completed,day,unlocked));
  }
  assert.equal(completed.length,24);
});
test('stored progress is validated, sorted and deduplicated',()=>assert.deepEqual(Array.from(parseCompletedDays('[24,2,2,0,25,"3",1.5,1]')),[1,2,24]));
test('damaged storage does not crash startup',()=>assert.equal(parseCompletedDays('{broken').length,0));
test('calendar opens Dec 1 locally, caps at 24 and survives year end',()=>{assert.equal(unlockedDay(new Date(2026,10,30,23,59)),0);assert.equal(unlockedDay(new Date(2026,11,1)),1);assert.equal(unlockedDay(new Date(2026,11,24)),24);assert.equal(unlockedDay(new Date(2027,0,1)),24);});
test('future days and invalid route IDs stay locked',()=>{for(const day of [0,-1,1.5,25,NaN])assert.equal(canOpenDay(day,[],24),false);assert.equal(canOpenDay(20,[],3),false);});
test('completed days remain available before calendar start',()=>assert.equal(canOpenDay(12,[12],0),true));
test('test mode grants valid days only; production refuses test flag',()=>{assert.equal(canOpenDay(24,[],0,true),true);assert.equal(canOpenDay(25,[],0,true),false); const configure=require('../app.config.js');const previous={...process.env};try{process.env.EAS_BUILD_PROFILE='production';process.env.EXPO_PUBLIC_ADVENT_TESTING='true';assert.throws(()=>configure({config:{}}));process.env.EXPO_PUBLIC_ADVENT_TESTING='false';assert.equal(configure({config:{}}).extra.releaseTesting,false);}finally{process.env=previous;}});
test('completion rejects future days and is idempotent',()=>{assert.equal(addCompletedDay([],2,1).length,0);assert.deepEqual(Array.from(addCompletedDay([1],1,1)),[1]);});
test('serialization roundtrip retains progress across sessions/language changes',()=>{const saved=JSON.stringify(addCompletedDay([1],2,2));assert.deepEqual(Array.from(parseCompletedDays(saved)),[1,2]);});
test('explicit preview opens exactly 24 valid days without changing normal locks',()=>{
  for(let day=1;day<=24;day++) { assert.equal(canOpenDay(day,[],0,true),true); assert.equal(canOpenDay(day,[],0,false),false); }
  for(const day of [0,25,1.5,NaN]) assert.equal(canOpenDay(day,[],0,true),false);
});
test('store testing inherits production flags and unique remote build numbering',()=>{
  const eas=require('../eas.json');
  assert.equal(eas.cli.appVersionSource,'remote');
  assert.equal(eas.build.testing.extends,'production');
  assert.equal(eas.build.production.autoIncrement,true);
  assert.equal(eas.build.production.env.EXPO_PUBLIC_ADVENT_TESTING,'false');
  assert.equal(eas.build.phone.android.buildType,'apk');
  assert.equal(eas.submit.testing.android.releaseStatus,'draft');
});
