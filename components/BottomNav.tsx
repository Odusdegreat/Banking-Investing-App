import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function BottomNav() {
  const router = useRouter();
  const segments = useSegments();
  const [activeRoute, setActiveRoute] = useState("/home");

  const tabs = [
    {
      route: "/home",
      icon: "home-outline",
      iconSet: "ionicons",
      label: "Home",
    },
    {
      route: "/investing",
      icon: "credit-card",
      iconSet: "feather",
      label: "Investing",
    },
    {
      route: "/dashboard",
      icon: "grid-outline",
      iconSet: "ionicons",
      label: "Dashboard",
    },
    {
      route: "/notification",
      icon: "notifications-outline",
      iconSet: "ionicons",
      label: "Alerts",
    },
    {
      route: "/user",
      icon: "user",
      iconSet: "feather",
      label: "Profile",
    },
  ];

  useEffect(() => {
    const current = "/" + segments.join("/");
    const matchedTab = tabs.find(
      (tab) => current.toLowerCase() === tab.route.toLowerCase()
    );
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
          <TabItem
            key={tab.route}
            tab={tab}
            isActive={isActive}
            onPress={() => handlePress(tab.route)}
            iconColor={iconColor(tab.route)}
            textColor={textColor(tab.route)}
          />
        );
      })}
    </View>
  );
}

// Separate component for each tab item with proper types
interface TabItemProps {
  tab: {
    route: string;
    icon: string;
    iconSet: string;
    label: string;
  };
  isActive: boolean;
  onPress: () => void;
  iconColor: string;
  textColor: string;
}

function TabItem({
  tab,
  isActive,
  onPress,
  iconColor,
  textColor,
}: TabItemProps) {
  // Pulse animation for glow - always animate, but control visibility
  const pulseStyle = useAnimatedStyle(() => {
    if (!isActive) {
      return {
        transform: [{ scale: 1 }],
        opacity: 0,
      };
    }
    return {
      transform: [
        { scale: withRepeat(withTiming(1.8, { duration: 1200 }), -1, false) },
      ],
      opacity: withRepeat(withTiming(0, { duration: 1200 }), -1, false),
    };
  }, [isActive]);

  // Icon animation
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(isActive ? 1.2 : 1, { duration: 200 }) }],
      opacity: withTiming(isActive ? 1 : 0.6, { duration: 200 }),
    };
  }, [isActive]);

  // Label animation
  const labelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 1 : 0.7, { duration: 200 }),
      transform: [
        { scale: withTiming(isActive ? 1.05 : 1, { duration: 200 }) },
      ],
    };
  }, [isActive]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="items-center justify-center"
    >
      <View className="relative items-center justify-center">
        {/* Pulse Glow Effect */}
        <Animated.View
          style={[
            pulseStyle,
            {
              position: "absolute",
              width: 32,
              height: 32,
              borderRadius: 20,
              backgroundColor: "#22C55E",
            },
          ]}
        />

        {/* Animated Icon */}
        <Animated.View style={iconStyle}>
          {tab.iconSet === "ionicons" ? (
            <Ionicons name={tab.icon as any} size={22} color={iconColor} />
          ) : (
            <Feather name={tab.icon as any} size={22} color={iconColor} />
          )}
        </Animated.View>
      </View>

      {/* Animated Label */}
      <Animated.Text
        style={[
          labelStyle,
          {
            color: textColor,
            fontSize: 12,
            fontWeight: "600",
            marginTop: 4,
          },
        ]}
      >
        {tab.label}
      </Animated.Text>
    </TouchableOpacity>
  );
}
