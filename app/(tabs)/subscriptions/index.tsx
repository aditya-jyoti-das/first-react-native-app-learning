import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { subscriptions } from "../../../data/subscriptions";

export default function Subscriptions() {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <FlatList
        data={subscriptions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.title}>Subscriptions</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.item, pressed && styles.pressed]}
            onPress={() => router.push(`/subscriptions/${item.id}`)}
          >
            <View style={[styles.badge, { backgroundColor: item.color }]}>
              <Text style={styles.badgeText}>{item.name[0]}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.meta}>{item.billing} · {item.nextPayment}</Text>
            </View>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#ffffff" },
  list: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 24 },
  title: { fontSize: 28, fontWeight: "700", color: "#111827", marginBottom: 16 },
  separator: { height: 10 },
  item: { flexDirection: "row", alignItems: "center", padding: 14, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 16, backgroundColor: "#ffffff" },
  pressed: { backgroundColor: "#f9fafb" },
  badge: { width: 44, height: 44, borderRadius: 12, alignItems: "center", justifyContent: "center", marginRight: 12 },
  badgeText: { fontSize: 18, fontWeight: "700", color: "#ffffff" },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600", color: "#111827" },
  meta: { marginTop: 2, fontSize: 13, color: "#6b7280" },
  price: { fontSize: 16, fontWeight: "700", color: "#111827", marginRight: 8 },
});
