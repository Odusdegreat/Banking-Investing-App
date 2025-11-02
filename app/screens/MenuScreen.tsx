import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function MenuScreen() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate slide in and fade in
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const handleClose = () => {
    // Animate close then go back
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.back();
    });
  };

  return (
    <View className="flex-1">
      {/* Dim background overlay */}
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "black",
          opacity: fadeAnim,
        }}
      />

      {/* Sliding menu panel */}
      <Animated.View
        style={{
          transform: [{ translateX: slideAnim }],
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: width * 0.75,
          backgroundColor: "#1E293B",
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          paddingHorizontal: 20,
          paddingTop: 60,
        }}
      >
        {/* Close button */}
        <TouchableOpacity
          onPress={handleClose}
          className="absolute top-14 left-5"
        >
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>

        {/* Menu Items */}
        <View className="mt-10 space-y-6">
          <TouchableOpacity onPress={() => router.push("/investing")}>
            <Text className="text-white text-lg font-semibold">Investing</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/paymentmethods")}>
            <Text className="text-white text-lg font-semibold">
              Transactions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/user")}>
            <Text className="text-white text-lg font-semibold">Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/securitysettings")}>
            <Text className="text-white text-lg font-semibold">Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/helpsupport")}>
            <Text className="text-white text-lg font-semibold">Support</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
