import { Stack } from "expo-router"
import { Text, View } from "react-native-reanimated/lib/typescript/Animated"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
