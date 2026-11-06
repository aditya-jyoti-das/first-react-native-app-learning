import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Opening /sign-up directly (deep link, refresh) still gets a way back to sign-in.
export const unstable_settings = {
  initialRouteName: "sign-in",
};

export default function AuthLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          contentStyle: { backgroundColor: "#ffffff" },
        }}
      >
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </>
  );
}
