import { Link, router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthScreen } from "../../components/auth/AuthScreen";
import { Button } from "../../components/ui/Button";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  // TODO: replace with a real sign-up call. For now any input is accepted.
  const onSubmit = () => {
    router.replace("/subscriptions");
  };

  return (
    <AuthScreen
      title="Create account"
      subtitle="Sign up to get started"
      footer={
        <>
          <Text className="text-gray-500">Already have an account? </Text>
          <Link href="/sign-in" className="font-semibold text-blue-600">
            Sign in
          </Link>
        </>
      }
    >
      <AuthInput
        label="Full name"
        placeholder="Jane Doe"
        autoCapitalize="words"
        autoComplete="name"
        textContentType="name"
        value={name}
        onChangeText={setName}
      />
      <AuthInput
        label="Email"
        placeholder="you@example.com"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />
      <AuthInput
        label="Password"
        placeholder="At least 8 characters"
        secureTextEntry
        autoComplete="new-password"
        textContentType="newPassword"
        value={password}
        onChangeText={setPassword}
      />
      <AuthInput
        label="Confirm password"
        placeholder="Repeat your password"
        secureTextEntry
        autoComplete="new-password"
        textContentType="newPassword"
        value={confirm}
        onChangeText={setConfirm}
      />
      <Button title="Create account" onPress={onSubmit} />
    </AuthScreen>
  );
}
