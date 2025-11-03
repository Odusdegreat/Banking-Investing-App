import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AccountScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F172A] px-5 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold">Account</Text>
        <View className="w-6" /> {/* Placeholder to balance header */}
      </View>

      {/* Account details */}
      <View className="bg-[#1E293B] p-6 rounded-2xl">
        <Text className="text-white text-lg font-semibold mb-2">
          Odus&apos; Account
        </Text>
        <Text className="text-gray-400">Email: odus@example.com</Text>
        <Text className="text-gray-400">Plan: Premium</Text>
        <Text className="text-gray-400">Joined: Jan 2024</Text>
      </View>
    </View>
  );
}
