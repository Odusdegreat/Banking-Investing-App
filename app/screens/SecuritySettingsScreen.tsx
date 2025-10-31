import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import BottomNav from "@/components/BottomNav";

export default function SecuritySettingsScreen() {
  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="shield-outline" size={24} color="white" />
        </TouchableOpacity>
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

          {/* Enable Face ID */}
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="finger-print-outline" size={22} color="white" />
              <Text className="text-white text-base">Enable Face ID</Text>
            </View>
            <Ionicons name="toggle-outline" size={20} color="white" />
          </TouchableOpacity>

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

      <BottomNav />
    </View>
  );
}
