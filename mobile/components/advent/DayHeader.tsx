import { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Animated, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LanguageId } from '../../state/AdventContext';
import { fonts } from '../../theme/tokens';

const languages = [{id:'uk',label:'УКР',name:'Українська'},{id:'en',label:'ENG',name:'English'},{id:'ru',label:'РУС',name:'Русский'}] as const;
export function LanguageSlider({language,onChange}:{language:LanguageId;onChange:(value:LanguageId)=>void}) {
  const position=useRef(new Animated.Value(languages.findIndex(l=>l.id===language))).current;
  const [reduced,setReduced]=useState(false);
  useEffect(()=>{let mounted=true; void AccessibilityInfo.isReduceMotionEnabled().then(v=>{if(mounted)setReduced(v);});const subscription=AccessibilityInfo.addEventListener('reduceMotionChanged',setReduced);return()=>{mounted=false;subscription.remove();};},[]);
  useEffect(()=>{const animation=Animated.timing(position,{toValue:languages.findIndex(l=>l.id===language),duration:reduced?0:180,useNativeDriver:true});animation.start();return()=>animation.stop();},[language,position,reduced]);
  const pan=PanResponder.create({onMoveShouldSetPanResponder:(_,g)=>Math.abs(g.dx)>12&&Math.abs(g.dx)>Math.abs(g.dy),onPanResponderRelease:(_,g)=>{if(Math.abs(g.dx)>20){const index=languages.findIndex(l=>l.id===language);onChange(languages[Math.max(0,Math.min(2,index+(g.dx>0?1:-1)))].id);}}});
  return <View style={styles.slider} {...pan.panHandlers}>
    <Animated.View pointerEvents="none" style={[styles.thumb,{transform:[{translateX:position.interpolate({inputRange:[0,2],outputRange:[0,112]})}]}]}/>
    {languages.map(l=><Pressable key={l.id} accessibilityRole="button" accessibilityLabel={l.name} accessibilityState={{selected:language===l.id}} onPress={()=>onChange(l.id)} style={styles.language}><Text style={[styles.languageText,language===l.id&&styles.activeText]}>{l.label}</Text></Pressable>)}
  </View>;
}
export function DayHeader({day,title,backLabel,language,onLanguage,onBack}:{day:string;title:string;backLabel:string;language:LanguageId;onLanguage:(l:LanguageId)=>void;onBack:()=>void}) {
  return <View style={styles.header}>
    <View style={styles.row}><Pressable accessibilityRole="button" accessibilityLabel={backLabel} onPress={onBack} style={styles.back}><Ionicons name="chevron-back" size={23} color="#fff8e8"/></Pressable><View style={styles.titles}><Text style={styles.day}>{day}</Text><Text numberOfLines={2} style={styles.title}>{title}</Text></View></View>
    <View style={styles.languageRow}><LanguageSlider language={language} onChange={onLanguage}/></View>
  </View>;
}
const styles=StyleSheet.create({
  header:{backgroundColor:'#14254B',paddingHorizontal:12,paddingTop:6,paddingBottom:8},row:{flexDirection:'row',alignItems:'center',gap:8,maxWidth:1100,width:'100%',alignSelf:'center'},back:{width:44,height:44,alignItems:'center',justifyContent:'center',borderRadius:22,backgroundColor:'#25395d'},titles:{flex:1},day:{color:'#e8c879',fontFamily:fonts.bodyBold,fontSize:10},title:{color:'#fff8e8',fontFamily:fonts.headingBold,fontSize:18,lineHeight:22},languageRow:{alignItems:'center',marginTop:4},slider:{width:174,height:40,borderRadius:20,padding:3,backgroundColor:'#30415f',flexDirection:'row'},thumb:{position:'absolute',top:3,left:3,width:56,height:34,borderRadius:17,backgroundColor:'#f5d78f'},language:{width:56,height:34,alignItems:'center',justifyContent:'center'},languageText:{fontFamily:fonts.bodyBold,fontSize:12,color:'#e4eaf5'},activeText:{color:'#14254b'},
});
