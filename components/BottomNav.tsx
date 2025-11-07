import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import { MotiText, MotiView } from "moti";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const router = useRouter();
  const segments = useSegments();
  const [activeRoute, setActiveRoute] = useState("/home");

  const tabs = [
    {
      route: "/home",
      icon: <Ionicons name="home-outline" size={22} />,
      label: "Home",
    },
    {
      route: "/investing",
      icon: <Feather name="credit-card" size={22} />,
      label: "Investing",
    },
    {
      route: "/dashboard",
      icon: <Ionicons name="grid-outline" size={22} />,
      label: "Dashboard",
    },
    {
      route: "/notification",
      icon: <Ionicons name="notifications-outline" size={22} />,
      label: "Alerts",
    },
    {
      route: "/editprofile",
      icon: <Feather name="user" size={22} />,
      label: "Profile",
    },
  ];

  useEffect(() => {
    // Get current route from segments
    const current = "/" + segments.join("/");
    const matchedTab = tabs.find((tab) => current.startsWith(tab.route));
    setActiveRoute(matchedTab ? matchedTab.route : "/home");
  }, [segments]);

  const handlePress = (route: string) => {
    setActiveRoute(route);
    router.push(route as any);
  };

  const iconColor = (route: string) =>
    activeRoute === route ? "#22C55E" : "white";
  const textColor = (route: string) =>
    activeRoute === route ? "#22C55E" : "#CBD5E1";

  return (
    <View className="flex-row justify-around items-center bg-white/10 py-3 rounded-3xl mx-5 mb-5">
      {tabs.map((tab) => {
        const isActive = activeRoute === tab.route;

        return (
          <TouchableOpacity
            key={tab.route}
            onPress={() => handlePress(tab.route)}
            activeOpacity={0.8}
            className="items-center justify-center"
          >
            <View className="relative items-center justify-center">
              {/* Pulse Glow Effect */}
              {isActive && (
                <MotiView
                  from={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ type: "timing", duration: 1200, loop: true }}
                  style={{
                    position: "absolute",
                    width: 32,
                    height: 32,
                    borderRadius: 20,
                    backgroundColor: "#22C55E",
                  }}
                />
              )}

              {/* Animated Icon */}
              <MotiView
                from={{
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 0.8 : 0.6,
                }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "timing", duration: 200 }}
              >
                {React.cloneElement(tab.icon, { color: iconColor(tab.route) })}
              </MotiView>
            </View>

            {/* Animated Label */}
            <MotiText
              from={{ opacity: 0.5, scale: 0.95 }}
              animate={{
                opacity: isActive ? 1 : 0.7,
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ type: "timing", duration: 200 }}
              style={{
                color: textColor(tab.route),
                fontSize: 12,
                fontWeight: "600",
                marginTop: 4,
              }}
            >
              {tab.label}
            </MotiText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
