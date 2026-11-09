import { useEffect, useState } from 'react';
import { Image, ImageSourcePropType, Platform, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LanguageId } from '../../state/AdventContext';
import { fonts } from '../../theme/tokens';
import { LanguageSlider } from './DayHeader';

export type BookPage={title:string;paragraphs:readonly string[];image?:ImageSourcePropType};
export function StoryBook({title,pages,language,onLanguage,onClose,onFinish}:{title:string;pages:readonly BookPage[];language:LanguageId;onLanguage:(l:LanguageId)=>void;onClose:()=>void;onFinish:()=>void}) {
  const [page,setPage]=useState(0);
  const {width,height}=useWindowDimensions();
  const spread=width>=900&&height>=500;
  const labels={uk:{close:'Закрити книжку',next:'Далі',previous:'Назад',finish:'До запитань',page:'Сторінка'},en:{close:'Close book',next:'Next',previous:'Back',finish:'Questions',page:'Page'},ru:{close:'Закрыть книгу',next:'Далее',previous:'Назад',finish:'К вопросам',page:'Страница'}}[language];
  const current=pages[Math.min(page,pages.length-1)];
  useEffect(()=>setPage(p=>Math.min(p,pages.length-1)),[pages.length]);
  useEffect(()=>{
    if(Platform.OS!=='web')return;
    const key=(event:KeyboardEvent)=>{if(event.target instanceof HTMLElement&&/INPUT|TEXTAREA|BUTTON/.test(event.target.tagName))return;if(event.key==='ArrowRight'){event.preventDefault();setPage(p=>Math.min(pages.length-1,p+1));}if(event.key==='ArrowLeft'){event.preventDefault();setPage(p=>Math.max(0,p-1));}if(event.key==='Escape')onClose();};
    window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);
  },[pages.length,onClose]);
  return <SafeAreaView edges={['top','bottom']} style={styles.screen}>
    <StatusBar style="light"/>
    <View style={styles.toolbar}><Pressable accessibilityRole="button" accessibilityLabel={labels.close} onPress={onClose} style={styles.close}><Text style={styles.closeText}>×</Text></Pressable><Text numberOfLines={1} style={styles.bookTitle}>{title}</Text><LanguageSlider language={language} onChange={onLanguage}/></View>
    <View style={[styles.book,spread&&styles.spread]}>
      {spread&&current.image&&<View style={styles.picturePage}><Image accessibilityLabel={current.title} source={current.image} resizeMode="contain" style={styles.spreadImage}/><Text style={styles.caption}>{current.title}</Text></View>}
      <ScrollView key={page} style={styles.paper} contentContainerStyle={[styles.paperContent,{paddingHorizontal:width<600?22:48}]}>
        {!spread&&current.image&&<Image accessibilityLabel={current.title} source={current.image} resizeMode="contain" style={[styles.image,{height:Math.max(140,Math.min(height*.32,320))}]}/>}
        <Text style={styles.chapter}>{labels.page} {page+1} / {pages.length}</Text>
        <Text accessibilityRole="header" style={styles.heading}>{current.title}</Text>
        {current.paragraphs.map((paragraph,index)=><Text key={index} selectable style={[styles.paragraph,{fontSize:width<600?19:22,lineHeight:width<600?30:36}]}>{paragraph}</Text>)}
      </ScrollView>
    </View>
    <View style={styles.footer}><Pressable accessibilityRole="button" disabled={page===0} onPress={()=>setPage(p=>p-1)} style={[styles.nav,page===0&&styles.disabled]}><Text style={styles.navText}>‹ {labels.previous}</Text></Pressable><Text accessibilityLiveRegion="polite" style={styles.count}>{page+1} / {pages.length}</Text><Pressable accessibilityRole="button" onPress={()=>page===pages.length-1?onFinish():setPage(p=>p+1)} style={styles.nav}><Text style={styles.navText}>{page===pages.length-1?labels.finish:labels.next} ›</Text></Pressable></View>
  </SafeAreaView>;
}
const styles=StyleSheet.create({screen:{flex:1,backgroundColor:'#14213d'},toolbar:{flexDirection:'row',alignItems:'center',gap:8,paddingHorizontal:10,paddingVertical:6},close:{width:40,height:44,alignItems:'center',justifyContent:'center'},closeText:{color:'#f5d78f',fontSize:32},bookTitle:{flex:1,color:'#f6e6c4',fontFamily:fonts.headingBold,fontSize:14},book:{flex:1,marginHorizontal:8,overflow:'hidden',borderRadius:8,backgroundColor:'#fff9eb'},spread:{flexDirection:'row',maxWidth:1400,width:'96%',alignSelf:'center',marginVertical:12,shadowColor:'#000',shadowOpacity:.3,shadowRadius:16,shadowOffset:{width:0,height:6}},paper:{flex:1,backgroundColor:'#fff9eb'},paperContent:{paddingTop:24,paddingBottom:36},picturePage:{width:'48%',backgroundColor:'#f3e5c9',padding:24,justifyContent:'center',borderRightWidth:2,borderColor:'#d5be91'},spreadImage:{width:'100%',height:'80%'},caption:{marginTop:12,color:'#775c35',fontFamily:fonts.heading,fontSize:18,textAlign:'center'},image:{width:'100%',marginBottom:24},chapter:{fontSize:11,letterSpacing:2,textTransform:'uppercase',color:'#886630',fontFamily:fonts.bodyBold},heading:{fontFamily:fonts.headingBold,fontSize:28,lineHeight:35,color:'#2f2940',marginTop:12,marginBottom:22},paragraph:{fontFamily:fonts.heading,color:'#39312b',marginBottom:20},footer:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:12,paddingVertical:10,gap:8},nav:{minHeight:44,paddingHorizontal:16,justifyContent:'center',borderRadius:22,backgroundColor:'#f5d78f'},navText:{fontFamily:fonts.bodyBold,fontSize:14,color:'#14213d'},disabled:{opacity:.35},count:{color:'#f5e6c8',fontFamily:fonts.body,fontSize:12}});
