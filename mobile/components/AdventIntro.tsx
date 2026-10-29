import { useEffect, useState } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useFonts } from 'expo-font';
import Animated, { Easing, cancelAnimation, interpolate, runOnJS, useAnimatedProps, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Circle, Defs, Mask, Path, RadialGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';
import type { SharedValue } from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);
// Complete both words at 3700ms, hold for two seconds, then reveal the map.
const HOLD_END = 5700;
const DURATION = 6900;
const GOLD = '#F6D991';
const dust = Array.from({ length: 112 }, (_, i) => ({
  x: ((i * 73) % 101) / 100, y: ((i * 47) % 97) / 96,
  delay: (i / 111) * 1500, size: i % 4 === 0 ? 3.4 : i % 3 === 0 ? 2 : 1.3,
}));

function Particle({ index, clock, width, height }: { index: number; clock: SharedValue<number>; width: number; height: number }) {
  const p = dust[index];
  const style = useAnimatedStyle(() => {
    const t = clock.value;
    const progress = index / 111;
    const drift = Math.max(0, t - 300) / 4600 * .035;
    const along = Math.min(1, progress + drift);
    const release = Math.max(0, Math.min(1, (t - HOLD_END - 250) / 950));
    const spread = Math.min(width, 470);
    const radius = spread * (.31 - along * .25);
    const angle = along * Math.PI * 4.4 - 1.2;
    const x = width / 2 + Math.sin(angle) * radius + (p.x - .5) * 25;
    const y = height * (.86 - along * .60) + (p.y - .5) * 22;
    const shimmer = .82 + .18 * Math.sin(t / 290 + index * 2.4);
    return { opacity: interpolate(t, [0, 100 + p.delay, 500 + p.delay, 6000, DURATION], [0, 0, .85, .85, 0]) * shimmer, transform: [{ translateX: x + (p.x - .5) * width * release }, { translateY: y + height * .48 * release }, { scale: 1 + .18 * Math.sin(t / 340 + index) }] };
  });
  return <Animated.View style={[styles.particle, { width: p.size, height: p.size }, index % 4 === 0 && styles.brightParticle, style]}>
    <View style={[styles.grain, { left: 7 + p.x * 13, top: -8 - p.y * 14, opacity: .75 }]} />
    <View style={[styles.grain, { left: -6 - p.y * 19, top: 4 + p.x * 15, opacity: .55 }]} />
    <View style={[styles.grain, { left: 14 - p.y * 28, top: 20 + p.x * 16, opacity: .4 }]} />
  </Animated.View>;
}

/** One shared UI-thread clock; no per-frame React updates or timer loops. */
export function AdventIntro({ onFinish, language }: { onFinish: () => void; language: string }) {
  const { width, height } = useWindowDimensions();
  const [fontReady, fontError] = useFonts({ AdventScript: require('../assets/fonts/Sacramento-Regular.ttf') });
  const [reduced, setReduced] = useState<boolean | null>(null);
  const clock = useSharedValue(0);
  // A damaged font asset must never hold the calendar behind the intro.
  useEffect(() => {
    const watchdog = setTimeout(onFinish, DURATION + 2000);
    return () => clearTimeout(watchdog);
  }, [onFinish]);
  useEffect(() => {
    let mounted = true;
    AccessibilityInfo.isReduceMotionEnabled().then(value => { if (mounted) setReduced(value); }).catch(() => { if (mounted) setReduced(true); });
    const subscription = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduced);
    return () => { mounted = false; subscription.remove(); };
  }, []);
  useEffect(() => {
    if ((!fontReady && !fontError) || reduced === null) return;
    clock.value = 0;
    clock.value = withTiming(DURATION, { duration: reduced ? 350 : DURATION, easing: Easing.linear }, finished => { if (finished) runOnJS(onFinish)(); });
    return () => cancelAnimation(clock);
  }, [clock, fontReady, fontError, reduced, onFinish]);
  const backdrop = useAnimatedStyle(() => ({ opacity: interpolate(clock.value, [0, HOLD_END, DURATION], [1, 1, 0]) }));
  const star = useAnimatedStyle(() => ({ opacity: reduced ? 0 : interpolate(clock.value, [0, 1200, 2000, 5900, 6800], [0, 0, 1, 1, 0]), transform: [{ scale: interpolate(clock.value, [0, 1300, 2100, 5900, DURATION], [.65, .65, 1, 1.04, .6]) }, { translateY: interpolate(clock.value, [0, 5800, DURATION], [0, 0, -height * .25]) }] }));
  const word = useAnimatedStyle(() => ({ opacity: interpolate(clock.value, [0, 1900, 2100, 6000, 6750], [0, 0, 1, 1, 0]), transform: [{ translateY: interpolate(clock.value, [0, 5900, DURATION], [0, 0, -24]) }, { rotate: '-9deg' }] }));
  const calendar = useAnimatedStyle(() => ({ opacity: interpolate(clock.value, [0, 3450, 3700, 6000, 6750], [0, 0, 1, 1, 0]) }));
  const pen = useAnimatedProps(() => ({ strokeDashoffset: interpolate(clock.value, [2650, 3400], [1500, 0], 'clamp') }));
  // Trace the capital separately: rising swash, apex, downstroke, crossbar.
  // Its high tip is covered by the pen itself rather than a late whole-word reveal.
  const capitalPen = useAnimatedProps(() => ({ strokeDashoffset: interpolate(clock.value, [2100, 2850], [650, 0], 'clamp') }));
  const completeInk = useAnimatedProps(() => ({ opacity: interpolate(clock.value, [2800, 3500], [0, 1], 'clamp') }));
  const skip = language === 'uk' ? 'Пропустити' : language === 'ru' ? 'Пропустить' : 'Skip intro';
  return <View style={styles.overlay} accessibilityViewIsModal>
    <Animated.View style={[StyleSheet.absoluteFill, styles.navy, backdrop]}>
      <Svg width="100%" height="100%"><Defs><RadialGradient id="night-depth" cx="50%" cy="45%" rx="75%" ry="70%"><Stop offset="0" stopColor="#101A3A" /><Stop offset="1" stopColor="#020A1C" /></RadialGradient></Defs><Path d={`M0 0 H${width} V${height} H0 Z`} fill="url(#night-depth)" /></Svg>
    </Animated.View>
    {!reduced && dust.map((_, i) => <Particle key={i} index={i} clock={clock} width={width} height={height} />)}
    <Animated.View style={[styles.star, { top: height * .26 - 85, left: width / 2 - 85 }, star]}>
      <Svg width={170} height={170} viewBox="0 0 170 170">
        <Defs><RadialGradient id="star-glow"><Stop offset="0" stopColor="#FFF5CA" stopOpacity={.85} /><Stop offset=".15" stopColor="#FFC563" stopOpacity={.4} /><Stop offset=".5" stopColor="#F4AB44" stopOpacity={.09} /><Stop offset="1" stopColor="#F4AB44" stopOpacity={0} /></RadialGradient></Defs>
        <Circle cx={85} cy={85} r={83} fill="url(#star-glow)" />
        <Path d="M85 0 L86.5 81 L170 85 L86.5 87 L85 170 L83.5 87 L0 85 L83.5 81 Z" fill="#FFE5A3" />
        <Path d="M52 52 L85 81 L118 52 L89 85 L118 118 L85 89 L52 118 L81 85 Z" fill="#FFD98D" />
        <Circle cx={85} cy={85} r={3} fill="#FFFDEE" />
      </Svg>
    </Animated.View>
    <Animated.View style={[styles.word, { top: height * .50, width: Math.min(width - 12, 560), height: Math.min(width - 12, 560) * 200 / 430 }, word]}>
      {fontReady && <Svg width="100%" height="100%" viewBox="-35 -35 430 200">
        <Defs><Mask id="advent-ink" maskUnits="userSpaceOnUse" x={-35} y={-35} width={430} height={200}>
          <AnimatedPath animatedProps={capitalPen} d="M-12 117 C42 139 89 57 129 0 C133 -8 133 19 132 42 L140 112 M-6 76 C-20 111 66 84 153 77" stroke="white" strokeWidth={24} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="650" />
          <AnimatedPath animatedProps={pen} d="M146 115 C132 -8 179 -12 169 111 C174 56 201 57 198 111 C201 58 232 57 230 111 C233 55 267 54 264 111 C269 48 305 4 302 111 L365 111" stroke="white" strokeWidth={48} fill="none" strokeLinecap="round" strokeDasharray="1500" />
          <AnimatedRect animatedProps={completeInk} x={-35} y={-35} width={430} height={200} fill="white" />
        </Mask></Defs>
        <SvgText x={180} y={104} textAnchor="middle" fontFamily="AdventScript" fontSize={130} fill="none" stroke="#E8A84D" strokeWidth={2.5} opacity={.18} mask="url(#advent-ink)">Advent</SvgText>
        <SvgText x={180} y={104} textAnchor="middle" fontFamily="AdventScript" fontSize={130} fill="#FFE0A0" mask="url(#advent-ink)">Advent</SvgText>
      </Svg>}
    </Animated.View>
    <Animated.View style={[styles.calendar, { top: height * .50 + Math.min(width - 12, 560) * .40 }, calendar]}><Text style={styles.calendarText}>calendar</Text></Animated.View>
    <Pressable accessibilityRole="button" accessibilityLabel={skip} onPress={onFinish} style={styles.skip}><Text style={styles.skipText}>{skip}</Text></Pressable>
  </View>;
}

const styles = StyleSheet.create({
  overlay: { ...StyleSheet.absoluteFillObject, zIndex: 1000, alignItems: 'center' },
  navy: { backgroundColor: '#101A3A' },
  particle: { position: 'absolute', left: 0, top: 0, borderRadius: 4, backgroundColor: GOLD },
  grain: { position: 'absolute', width: 1, height: 1, borderRadius: 1, backgroundColor: '#E6B866' },
  brightParticle: { backgroundColor: '#FFF3D0', shadowColor: '#FFC061', shadowRadius: 5, shadowOpacity: 1, shadowOffset: { width: 0, height: 0 } },
  star: { position: 'absolute', width: 170, height: 170, alignItems: 'center', justifyContent: 'center' },
  word: { position: 'absolute' },
  calendar: { position: 'absolute' },
  calendarText: { color: '#F6D991', fontSize: 21, letterSpacing: 8, fontWeight: '300' },
  skip: { position: 'absolute', bottom: 42, padding: 16 },
  skipText: { color: '#D7C89F', fontSize: 12, letterSpacing: 1.5 },
});
