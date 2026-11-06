import { Stack, router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/ui/Button";
import { getSubscription } from "../../../data/subscriptions";

export default function SubscriptionDetails() {
  // [id] in the file name becomes a param: /subscriptions/2 -> { id: "2" }
  const { id } = useLocalSearchParams<{ id: string }>();
  const subscription = getSubscription(id);

  if (!subscription) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: "Not found" }} />
        <Text style={styles.title}>Subscription not found</Text>
        <Text style={styles.muted}>No subscription with id &quot;{id}&quot;.</Text>
        <View style={styles.action}>
          <Button title="Go back" variant="outline" onPress={() => router.back()} />
        </View>
      </View>
    );
  }

  const rows: [string, string][] = [
    ["Price", `$${subscription.price.toFixed(2)} / ${subscription.billing === "Monthly" ? "month" : "year"}`],
    ["Billing", subscription.billing],
    ["Next payment", subscription.nextPayment],
    ["Category", subscription.category],
  ];

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: subscription.name }} />
      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: subscription.color }]}>
          <Text style={styles.badgeText}>{subscription.name[0]}</Text>
        </View>
        <Text style={styles.title}>{subscription.name}</Text>
      </View>

      <View style={styles.card}>
        {rows.map(([label, value], i) => (
          <View key={label} style={[styles.row, i > 0 && styles.rowBorder]}>
            <Text style={styles.muted}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.action}>
        <Button title="Back to subscriptions" variant="outline" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#ffffff", padding: 24 },
  center: { flex: 1, backgroundColor: "#ffffff", padding: 24, alignItems: "center", justifyContent: "center" },
  header: { alignItems: "center", marginBottom: 24 },
  badge: { width: 72, height: 72, borderRadius: 20, alignItems: "center", justifyContent: "center", marginBottom: 12 },
  badgeText: { fontSize: 32, fontWeight: "700", color: "#ffffff" },
  title: { fontSize: 26, fontWeight: "700", color: "#111827" },
  card: { borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 16, paddingHorizontal: 16 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 14 },
  rowBorder: { borderTopWidth: 1, borderTopColor: "#f3f4f6" },
  muted: { fontSize: 15, color: "#6b7280" },
  value: { fontSize: 15, fontWeight: "600", color: "#111827" },
  action: { marginTop: 24, alignSelf: "stretch" },
});
