import "expo-dev-client";
import "react-native-reanimated";
import "../global.css";

import { NAV_THEME } from "@/theme";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const isDark = colorScheme === "dark";

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-[#0F172A]">
        <StatusBar
          key={`root-status-bar-${isDark ? "light" : "dark"}`}
          style={isDark ? "light" : "dark"}
        />

        <ActionSheetProvider>
          <NavThemeProvider value={NAV_THEME[colorScheme]}>
            <Stack screenOptions={{ headerShown: false }} />
          </NavThemeProvider>
        </ActionSheetProvider>
      </View>
    </SafeAreaProvider>
  );
}
