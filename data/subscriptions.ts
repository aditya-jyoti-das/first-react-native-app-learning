export type Subscription = {
  id: string;
  name: string;
  price: number;
  billing: "Monthly" | "Yearly";
  nextPayment: string;
  category: string;
  color: string;
};

// Mock data until a real backend / storage exists.
export const subscriptions: Subscription[] = [
  { id: "1", name: "Netflix", price: 15.49, billing: "Monthly", nextPayment: "Dec 3, 2026", category: "Entertainment", color: "#e50914" },
  { id: "2", name: "Spotify", price: 10.99, billing: "Monthly", nextPayment: "Dec 12, 2026", category: "Music", color: "#1db954" },
  { id: "3", name: "iCloud+", price: 2.99, billing: "Monthly", nextPayment: "Dec 20, 2026", category: "Storage", color: "#3b82f6" },
  { id: "4", name: "Notion", price: 96, billing: "Yearly", nextPayment: "Mar 8, 2027", category: "Productivity", color: "#111827" },
];

export function getSubscription(id: string | undefined) {
  return subscriptions.find((s) => s.id === id);
}
