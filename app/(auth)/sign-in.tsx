import { Link, router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import { AuthInput } from "../../components/auth/AuthInput";
import { AuthScreen } from "../../components/auth/AuthScreen";
import { Button } from "../../components/ui/Button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: replace with a real auth call. For now any input is accepted.
  const onSubmit = () => {
    router.replace("/subscriptions");
  };

  return (
    <AuthScreen
      title="Welcome back"
      subtitle="Sign in to continue"
      footer={
        <>
          <Text className="text-gray-500">Don&apos;t have an account? </Text>
          <Link href="/sign-up" className="font-semibold text-blue-600">
            Sign up
          </Link>
        </>
      }
    >
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
        placeholder="Your password"
        secureTextEntry
        autoComplete="current-password"
        textContentType="password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={onSubmit} />
    </AuthScreen>
  );
}
