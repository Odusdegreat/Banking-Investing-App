import BottomNav from "@/components/BottomNav";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function SecuritySettingsScreen() {
  const router = useRouter();
  const [faceIDEnabled, setFaceIDEnabled] = useState(false);

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        {/* Back Button */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Placeholder for alignment (empty view same width as icon) */}
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="px-5 mt-6 space-y-4">
          <Text className="text-lg text-white font-semibold mb-2">
            Security Settings
          </Text>

          {/* Change Password */}
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Feather name="lock" size={22} color="white" />
              <Text className="text-white text-base">Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Enable Face ID (with toggle) */}
          <View className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="finger-print-outline" size={22} color="white" />
              <Text className="text-white text-base">Enable Face ID</Text>
            </View>
            <Switch
              value={faceIDEnabled}
              onValueChange={setFaceIDEnabled}
              trackColor={{ false: "#374151", true: "#4ADE80" }}
              thumbColor={faceIDEnabled ? "#22C55E" : "#F4F3F4"}
            />
          </View>

          {/* Two-Factor Authentication */}
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Feather name="smartphone" size={22} color="white" />
              <Text className="text-white text-base">
                Two-Factor Authentication
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Manage Devices */}
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="laptop-outline" size={22} color="white" />
              <Text className="text-white text-base">Manage Devices</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          {/* Reset PIN */}
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Feather name="key" size={22} color="white" />
              <Text className="text-white text-base">
                Reset Transaction PIN
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
