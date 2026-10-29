import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';
export default function Html({ children }: PropsWithChildren) {
  return <html lang="en"><head>
    <title>Advent Bible Journey</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#101A3A" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="Advent Bible Journey" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <ScrollViewStyleReset />
    <style dangerouslySetInnerHTML={{__html:'html,body{background:#101A3A}body{overscroll-behavior-y:none}#root{min-height:100%;min-height:100dvh}*{-webkit-tap-highlight-color:transparent}'}} />
  </head><body>{children}</body></html>;
}
