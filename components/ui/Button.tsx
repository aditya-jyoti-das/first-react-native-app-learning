import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
  StyleSheet,
  Text,
} from "react-native";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = Omit<PressableProps, "children" | "style"> & {
  title: string;
  variant?: Variant;
  loading?: boolean;
};

// Layout (size, shape, alignment) is set with plain StyleSheet styles on purpose,
// so a button always has a fixed height and never collapses or overlaps its neighbours.
const palette: Record<
  Variant,
  { bg: string; pressedBg: string; border: string; text: string }
> = {
  primary: { bg: "#2563eb", pressedBg: "#1d4ed8", border: "#2563eb", text: "#ffffff" },
  secondary: { bg: "#111827", pressedBg: "#1f2937", border: "#111827", text: "#ffffff" },
  outline: { bg: "#ffffff", pressedBg: "#f9fafb", border: "#d1d5db", text: "#111827" },
  ghost: { bg: "transparent", pressedBg: "#f3f4f6", border: "transparent", text: "#2563eb" },
};

export function Button({
  title,
  variant = "primary",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const colors = palette[variant];
  const isDisabled = !!disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: pressed ? colors.pressedBg : colors.bg,
          borderColor: colors.border,
          opacity: isDisabled ? 0.6 : 1,
        },
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={colors.text} />
      ) : (
        <Text style={[styles.label, { color: colors.text }]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: "stretch",
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
});
