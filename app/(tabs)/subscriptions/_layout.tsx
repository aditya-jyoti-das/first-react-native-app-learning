import { Stack } from "expo-router";

// Nested stack inside the Subscriptions tab: list -> details, tab bar stays visible.
export default function SubscriptionsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Subscription" }} />
    </Stack>
  );
}
