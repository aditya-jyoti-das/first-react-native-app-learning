import type { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthScreenProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
};

// Layout uses `style` (not className): SafeAreaView is a third-party component,
// so className is ignored on it and the screen would collapse to zero height.
export function AuthScreen({ title, subtitle, children, footer }: AuthScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Scrolls the focused field above the keyboard while typing. */}
      <KeyboardAwareScrollView
        style={styles.flex}
        contentContainerStyle={styles.content}
        bottomOffset={24}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
      >
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {children}
        <View style={styles.footer}>{footer}</View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  screen: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: { marginBottom: 32 },
  title: { fontSize: 30, fontWeight: "700", color: "#111827" },
  subtitle: { marginTop: 8, fontSize: 16, color: "#6b7280" },
  footer: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
