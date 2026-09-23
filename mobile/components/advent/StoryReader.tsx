import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

import { AdventStory, AdventStorySection } from "../../data/storyTypes";
import { StoryControls } from "./StoryControls";
import { STORY_COLORS, STORY_SHADOW } from "./storyTheme";

type Props = {
  story: AdventStory;
  scene: number;
  images: Partial<Record<"journey" | "lamb", ImageSourcePropType>>;
  labels: { heading: string; previous: string; next: string; finish: string };
  onNext: () => void;
  onPrevious: () => void;
};

export function StorySection({ section, image }: { section: AdventStorySection; image?: ImageSourcePropType }) {
  return (
    <View style={styles.card}>
      {image && (
        <View>
          <Image source={image} style={styles.image} accessibilityLabel={section.imageAlt} />
          {section.imageAlt && <Text style={styles.caption}>{section.imageAlt}</Text>}
        </View>
      )}
      <View style={styles.copy}>
        {section.text.map((paragraph, index) => (
          <Text key={`${section.id}-${index}`} style={styles.paragraph}>{paragraph}</Text>
        ))}
      </View>
    </View>
  );
}

export function StoryReader({ story, scene, images, labels, onNext, onPrevious }: Props) {
  const section = story.sections[scene];
  const isLast = scene === story.sections.length - 1;
  const image = section.image ? images[section.image] : undefined;

  return (
    <>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>{story.bibleReference}</Text>
        <Text style={styles.heading}>{labels.heading}</Text>
        <View style={styles.sceneProgress}>
          {story.sections.map((item, index) => (
            <View key={item.id} style={[styles.sceneBar, index <= scene && styles.sceneBarActive]} />
          ))}
        </View>
        <Text style={styles.count}>{scene + 1} / {story.sections.length}</Text>
        <StorySection section={section} image={image} />
      </View>
      <StoryControls
        previousLabel={labels.previous}
        nextLabel={isLast ? labels.finish : labels.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: { width: "100%", maxWidth: 720, alignSelf: "center", paddingHorizontal: 18, paddingTop: 24 },
  eyebrow: { color: STORY_COLORS.blue, fontFamily: "CrimsonPro_700Bold", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase" },
  heading: { marginTop: 5, color: STORY_COLORS.navy, fontFamily: "CrimsonPro_700Bold", fontSize: 32 },
  sceneProgress: { flexDirection: "row", gap: 6, marginTop: 15 },
  sceneBar: { flex: 1, height: 4, borderRadius: 4, backgroundColor: "#DDE4E8" },
  sceneBarActive: { backgroundColor: STORY_COLORS.blue },
  count: { marginTop: 7, textAlign: "right", color: STORY_COLORS.muted, fontFamily: "CrimsonPro_600SemiBold", fontSize: 12 },
  card: { marginTop: 11, overflow: "hidden", borderRadius: 25, backgroundColor: STORY_COLORS.card, ...STORY_SHADOW },
  image: { width: "100%", height: 245, resizeMode: "cover" },
  caption: { paddingHorizontal: 19, paddingTop: 10, color: STORY_COLORS.muted, fontFamily: "Lora_400Regular_Italic", fontSize: 11, lineHeight: 17 },
  copy: { padding: 22 },
  paragraph: { color: STORY_COLORS.ink, fontFamily: "CrimsonPro_400Regular", fontSize: 19, lineHeight: 30 },
});
