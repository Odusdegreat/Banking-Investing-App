import BottomNav from "@/components/BottomNav";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/logo.svg";

export default function PaymentMethodsScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white ml-2">INVETO</Text>
        </View>
        <Ionicons name="wallet-outline" size={24} color="white" />
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="px-5 mt-6 space-y-4">
          <Text className="text-lg text-white font-semibold mb-2">
            Payment Methods
          </Text>

          {/* Linked Cards */}
          <View className="bg-white/10 p-4 rounded-2xl">
            <Text className="text-gray-300 mb-3">Linked Cards</Text>

            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
                  }}
                  className="w-10 h-6"
                  resizeMode="contain"
                />
                <Text className="text-white text-base">**** 4321</Text>
              </View>
              <Feather name="check-circle" size={20} color="#4ADE80" />
            </View>

            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                  }}
                  className="w-10 h-6"
                  resizeMode="contain"
                />
                <Text className="text-white text-base">**** 8910</Text>
              </View>
              <Feather name="x-circle" size={20} color="#EF4444" />
            </View>

            <TouchableOpacity className="bg-[#2563EB] p-4 rounded-2xl flex-row items-center justify-center mt-4">
              <Ionicons name="add-circle-outline" size={20} color="white" />
              <Text className="text-white text-base font-semibold ml-2">
                Add New Card
              </Text>
            </TouchableOpacity>
          </View>

          {/* Bank Account Section */}
          <View className="bg-white/10 p-4 rounded-2xl mt-6">
            <Text className="text-gray-300 mb-3">Linked Bank Account</Text>

            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Ionicons name="business-outline" size={22} color="white" />
                <View>
                  <Text className="text-white text-base">GTBank</Text>
                  <Text className="text-gray-400 text-sm">**** 5678</Text>
                </View>
              </View>
              <Feather name="check-circle" size={20} color="#4ADE80" />
            </View>

            <TouchableOpacity className="bg-[#2563EB]/80 p-4 rounded-2xl flex-row items-center justify-center mt-3">
              <Ionicons name="add-outline" size={20} color="white" />
              <Text className="text-white text-base font-semibold ml-2">
                Link New Bank
              </Text>
            </TouchableOpacity>
          </View>

          {/* Other Payment Platforms */}
          <View className="bg-white/10 p-4 rounded-2xl mt-6">
            <Text className="text-gray-300 mb-3">Online Payment Platforms</Text>

            {/* Paystack */}
            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Paystack_Logo.png",
                  }}
                  className="w-20 h-6"
                  resizeMode="contain"
                />
              </View>
              <Feather name="check-circle" size={20} color="#4ADE80" />
            </View>

            {/* Stripe */}
            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
                  }}
                  className="w-20 h-6"
                  resizeMode="contain"
                />
              </View>
              <Feather name="x-circle" size={20} color="#EF4444" />
            </View>

            {/* Flutterwave */}
            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl mb-3">
              <View className="flex-row items-center space-x-3">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flutterwave_Logo.png",
                  }}
                  className="w-20 h-6"
                  resizeMode="contain"
                />
              </View>
              <Feather name="check-circle" size={20} color="#4ADE80" />
            </View>

            {/* Bank Transfer */}
            <View className="flex-row items-center justify-between bg-white/10 p-4 rounded-2xl">
              <View className="flex-row items-center space-x-3">
                <Ionicons
                  name="swap-horizontal-outline"
                  size={22}
                  color="white"
                />
                <Text className="text-white text-base">
                  Direct Bank Transfer
                </Text>
              </View>
              <Feather name="check-circle" size={20} color="#4ADE80" />
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
