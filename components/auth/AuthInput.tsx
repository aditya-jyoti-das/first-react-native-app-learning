import { useState } from "react";
import { Pressable, Text, TextInput, type TextInputProps, View } from "react-native";

type AuthInputProps = TextInputProps & {
  label: string;
  error?: string;
};

export function AuthInput({ label, error, secureTextEntry, ...props }: AuthInputProps) {
  const [hidden, setHidden] = useState(true);
  const isPassword = secureTextEntry === true;

  return (
    <View className="mb-4">
      <Text className="mb-1.5 text-sm font-medium text-gray-700">{label}</Text>
      <View
        className={`flex-row items-center rounded-xl border bg-gray-50 px-4 ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      >
        <TextInput
          className="h-12 flex-1 text-base text-gray-900"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          secureTextEntry={isPassword && hidden}
          {...props}
        />
        {isPassword && (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={8}>
            <Text className="text-sm font-semibold text-blue-600">
              {hidden ? "Show" : "Hide"}
            </Text>
          </Pressable>
        )}
      </View>
      {error ? <Text className="mt-1 text-sm text-red-500">{error}</Text> : null}
    </View>
  );
}
