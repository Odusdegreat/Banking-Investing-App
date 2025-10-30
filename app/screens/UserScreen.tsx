import BottomNav from "@/components/BottomNav";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.svg";

export default function UserScreen() {
  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Profile Section */}
        <View className="items-center mt-8">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            className="w-24 h-24 rounded-full mb-4"
          />
          <Text className="text-white text-xl font-semibold">Odus</Text>
          <Text className="text-gray-400">Investor • Member since 2024</Text>
        </View>

        {/* Actions */}
        <View className="mt-10 mx-5 space-y-4">
          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Feather name="user" size={22} color="white" />
              <Text className="text-white text-base">Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Feather name="lock" size={22} color="white" />
              <Text className="text-white text-base">Security Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="card-outline" size={22} color="white" />
              <Text className="text-white text-base">Payment Methods</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white/10 p-4 rounded-2xl flex-row items-center justify-between">
            <View className="flex-row items-center space-x-3">
              <Ionicons name="help-circle-outline" size={22} color="white" />
              <Text className="text-white text-base">Help & Support</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-red-500/90 p-4 rounded-2xl flex-row items-center justify-center mt-8">
            <Text className="text-white text-base font-semibold">Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
