import "expo-dev-client";
import "react-native-reanimated"; // 🧠 MUST be first
import "../global.css";

import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { NAV_THEME } from "@/theme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const isDarkColorScheme = colorScheme === "dark";

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />

      {/* Wrap the app in ActionSheet and Theme Providers */}
      <ActionSheetProvider>
        <NavThemeProvider value={NAV_THEME[colorScheme]}>
          {/* Root navigation stack */}
          <Stack screenOptions={{ headerShown: false }} />
        </NavThemeProvider>
      </ActionSheetProvider>
    </>
  );
}
