import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function EditProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F172A] px-5 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold">Edit Profile</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for spacing */}
      </View>

      {/* Form Fields */}
      <View className="space-y-5">
        <View>
          <Text className="text-gray-300 mb-2">Full Name</Text>
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
            className="bg-white/10 text-white rounded-xl p-4"
          />
        </View>

        <View>
          <Text className="text-gray-300 mb-2">Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            className="bg-white/10 text-white rounded-xl p-4"
          />
        </View>

        <View>
          <Text className="text-gray-300 mb-2">Phone Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            className="bg-white/10 text-white rounded-xl p-4"
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-white mt-10 p-4 rounded-2xl"
      >
        <Text className="text-[#0F172A] text-center text-base font-semibold">
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
}
