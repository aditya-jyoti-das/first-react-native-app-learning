import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ui/Button";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <View style={styles.hero}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>R</Text>
        </View>
        <Text style={styles.title}>Welcome to My First React Native App</Text>
        <Text style={styles.subtitle}>
          Sign in to pick up where you left off, or create an account to get started.
        </Text>
      </View>

      {/* Vertical list of buttons: one per row, 12px apart. */}
      <View style={styles.actions}>
        <Button title="Sign in" onPress={() => router.push("/sign-in")} />
        <Button
          title="Create account"
          variant="outline"
          onPress={() => router.push("/sign-up")}
        />
        <Button
          title="View subscriptions"
          variant="secondary"
          onPress={() => router.push("/subscriptions")}
        />
        <Button
          title="Open subscription #1"
          variant="outline"
          onPress={() => router.push("/subscriptions/1")}
        />
        <Button
          title="Take a quick tour"
          variant="ghost"
          onPress={() => router.push("/Onboarding")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  hero: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  logoText: { fontSize: 36, fontWeight: "700", color: "#ffffff" },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 24,
    color: "#6b7280",
    textAlign: "center",
  },
  actions: {
    flexDirection: "column",
    gap: 12,
  },
});
