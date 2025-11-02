import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export default function MenuScreen() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // slides up from bottom
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [slideAnim, router]);

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
      <Animated.View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: height * 0.6,
          backgroundColor: "#0F172A",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 20,
          transform: [{ translateY: slideAnim }],
        }}
      >
        <Text style={{ color: "white", fontSize: 24, marginBottom: 20 }}>
          Menu
        </Text>

        {/* Close button */}
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ padding: 12, backgroundColor: "#4CAF50", borderRadius: 8 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
