import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ADVENT_DAYS } from "../../data/adventDays";
import { JOURNEY_ART } from "../../data/journeyArt";
import { LanguageId, useAdvent } from "../../state/AdventContext";
import { fonts } from "../../theme/tokens";
import { MilestoneState } from "./PromiseTrail";

const POINTS = [[.07,.88],[.27,.83],[.39,.81],[.52,.83],[.61,.75],[.75,.75],[.85,.70],[.94,.65],[.81,.59],[.66,.61],[.59,.58],[.35,.67],[.16,.52],[.12,.38],[.19,.29],[.08,.20],[.27,.19],[.36,.17],[.47,.21],[.59,.29],[.75,.32],[.81,.38],[.93,.47],[.87,.22]];
type Props = { width: number; currentDay: number; completedDays: number[]; language: LanguageId; labels: {day:(n:number)=>string; current:string; completed:string; locked:string}; onDayPress:(day:number,state:MilestoneState)=>void };

export function FairytaleMap({width,currentDay,completedDays,language,labels,onDayPress}:Props) {
  const { canOpenDay } = useAdvent();
  const [selected,setSelected] = useState(currentDay);
  const mapWidth = Math.max(1120,width);
  const height = mapWidth * 2 / 3;
  const stateFor = (n:number):MilestoneState => completedDays.includes(n)?"completed":canOpenDay(n)?"current":"locked";
  const day = ADVENT_DAYS[selected-1];
  const state = stateFor(selected);
  const stateLabel = (s:MilestoneState) => s==="completed"?labels.completed:s==="current"?labels.current:labels.locked;
  const hint = language==="uk"?"Гортайте карту ↔ · Оберіть історію":language==="ru"?"Листайте карту ↔ · Выберите историю":"Explore the map ↔ · Choose a story";
  return <View style={styles.shell}>
    <View style={styles.hint}><Text style={styles.hintText}>{hint}</Text><Text style={styles.legend}>✓ {labels.completed}   ✦ {labels.current}   ♙ {labels.locked}</Text></View>
    <ScrollView horizontal showsHorizontalScrollIndicator nestedScrollEnabled style={{width}} contentContainerStyle={{width:mapWidth,height}}>
      <ImageBackground source={require("../../assets/journey/fairytale-map.png")} resizeMode="stretch" style={{width:mapWidth,height}}>
        {ADVENT_DAYS.map((item,i)=>{const s=stateFor(item.id);return <Pressable key={item.id} accessibilityRole="button" accessibilityLabel={`${labels.day(item.id)}. ${item.title[language]}. ${stateLabel(s)}`} accessibilityState={{selected:selected===item.id}} onPress={()=>setSelected(item.id)} style={({pressed})=>[styles.stop,{left:POINTS[i][0]*mapWidth-32,top:POINTS[i][1]*height-50},selected===item.id&&styles.selected,pressed&&styles.pressed]}>
          <View style={[styles.coin,s==="current"&&styles.currentCoin]}>
            <Image source={JOURNEY_ART[i]} style={styles.art} resizeMode="cover" />
            <LinearGradient colors={["transparent","rgba(38,17,3,.84)"]} style={styles.shade}/>
            <Text style={styles.number}>{item.id}</Text>
            <View style={[styles.status,s==="completed"&&styles.done]}><Ionicons name={s==="completed"?"checkmark":s==="current"?"sparkles":"lock-closed"} size={11} color={s==="completed"?"#fff":"#684009"}/></View>
          </View>
          {selected===item.id&&<View style={styles.pointer}/>}
        </Pressable>})}
      </ImageBackground>
    </ScrollView>
    <View style={styles.detail}>
      <Image source={JOURNEY_ART[selected-1]} style={styles.detailArt}/>
      <View style={styles.copy}><Text style={styles.kicker}>{labels.day(selected)} · {stateLabel(state)}</Text><Text style={styles.title}>{day.title[language]}</Text></View>
      <Pressable onPress={()=>onDayPress(selected,state)} accessibilityRole="button" accessibilityLabel={`${labels.day(selected)}. ${day.title[language]}`} style={({pressed})=>[styles.open,pressed&&styles.pressed]}><Ionicons name={state==="locked"?"lock-closed":"arrow-forward"} size={23} color="#342306"/></Pressable>
    </View>
  </View>;
}
const styles=StyleSheet.create({
 shell:{backgroundColor:"#101e40",width:"100%"},hint:{paddingHorizontal:20,paddingVertical:12,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",gap:8},hintText:{fontFamily:fonts.bodyBold,color:"#ffe1a0",fontSize:13},legend:{fontFamily:fonts.body,color:"#d9e5f5",fontSize:12},
 stop:{position:"absolute",width:64,height:80,alignItems:"center"},coin:{width:64,height:64,borderRadius:32,borderWidth:4,borderTopColor:"#fff2b6",borderLeftColor:"#ffcf6e",borderRightColor:"#ba6d20",borderBottomColor:"#8a4610",backgroundColor:"#8a4610",shadowColor:"#241006",shadowOffset:{width:0,height:7},shadowOpacity:.7,shadowRadius:3,elevation:9},currentCoin:{borderColor:"#fff2a8",shadowColor:"#ffdc6e",shadowRadius:18,shadowOpacity:1},art:{width:56,height:56,borderRadius:28},shade:{position:"absolute",inset:0,borderRadius:28},number:{position:"absolute",bottom:0,left:0,right:0,textAlign:"center",fontSize:26,lineHeight:32,fontFamily:fonts.headingBold,color:"#fff8df",textShadowColor:"#271303",textShadowRadius:4,textShadowOffset:{width:1,height:2}},status:{position:"absolute",right:-7,top:-6,width:20,height:20,borderRadius:10,backgroundColor:"#ffe6a4",alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#fff5d7"},done:{backgroundColor:"#287b62"},selected:{transform:[{scale:1.15}],zIndex:2},pointer:{marginTop:6,width:10,height:10,backgroundColor:"#ffe18c",transform:[{rotate:"45deg"}]},pressed:{opacity:.8,transform:[{scale:.96}]},
 detail:{padding:16,flexDirection:"row",alignItems:"center",gap:14,borderTopWidth:1,borderColor:"#b08b42",backgroundColor:"#fff4d9"},detailArt:{width:64,height:64,borderRadius:18,borderWidth:3,borderColor:"#e6bb63"},copy:{flex:1},kicker:{fontFamily:fonts.bodyBold,color:"#886020",fontSize:12},title:{fontFamily:fonts.headingBold,color:"#1a2847",fontSize:21,lineHeight:25,marginTop:3},open:{width:50,height:50,alignItems:"center",justifyContent:"center",borderRadius:18,backgroundColor:"#f3cc70",borderBottomWidth:4,borderBottomColor:"#b67a28"}
});
