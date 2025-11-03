// app/screens/PrivacyScreen.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PrivacyScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F172A] px-5 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold">Privacy</Text>
        <View className="w-6" />
      </View>

      {/* Content */}
      <ScrollView className="bg-[#1E293B] p-6 rounded-2xl">
        <Text className="text-white text-lg font-semibold mb-4">
          Privacy & Security
        </Text>
        <Text className="text-gray-400 mb-3">
          • We never share your data with third parties without your consent.
        </Text>
        <Text className="text-gray-400 mb-3">
          • Your transactions are end-to-end encrypted.
        </Text>
        <Text className="text-gray-400 mb-3">
          • You can request to delete your account anytime.
        </Text>
        <Text className="text-gray-400">
          Manage your data, permissions, and security preferences here.
        </Text>
      </ScrollView>
    </View>
  );
}
