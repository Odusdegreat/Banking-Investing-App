import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Frame16 from "../../assets/Frame 16.svg";
import Frame17 from "../../assets/Frame 17.svg";
import Piggy from "../../assets/Group.svg";

export default function InvestingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-row items-center space-x-2"
        >
          <Ionicons name="arrow-back" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Investing Tips */}
        <View className="px-5">
          <Text className="text-lg font-semibold text-white mb-3">
            Investing Tips
          </Text>

          <View className="bg-[#1E293B] rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
            <View className="w-16 h-16 bg-[#E2E8F0] rounded-full items-center justify-center">
              <Piggy width={50} height={50} />
            </View>

            <View className="flex-1 px-3">
              <Text className="text-base font-semibold text-white mb-1">
                What is an ETF?
              </Text>
              <Text className="text-sm text-gray-400 mb-3">
                By James B, PHD
              </Text>

              <TouchableOpacity className="bg-[#22C55E] px-3 py-2 rounded-lg self-start">
                <Text className="text-white text-xs font-semibold">
                  LEARN MORE
                </Text>
              </TouchableOpacity>
            </View>

            <View className="w-12 h-12 bg-[#E2E8F0] rounded-full items-center justify-center">
              <Ionicons name="trending-up-outline" size={26} color="#22C55E" />
            </View>
          </View>
        </View>

        {/* My Cards */}
        <View className="mt-8 px-5">
          <Text className="text-lg font-semibold text-white mb-4">
            My Cards (3)
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {/* Card 1 */}
            <View className="w-52 h-32 bg-[#0F172A] rounded-3xl p-5 mr-4 justify-between shadow">
              <View className="flex-row justify-between items-center">
                <View className="w-16 h-16 bg-[#1E293B] rounded-full items-center justify-center">
                  <Frame16 width={72} height={72} />
                </View>
                <Text className="text-white text-sm tracking-wider">
                  **** 6175
                </Text>
              </View>
              <Text className="text-white text-2xl font-semibold">$47,417</Text>
            </View>

            {/* Card 2 */}
            <View className="w-52 h-32 bg-[#CBD5E1] rounded-3xl p-5 mr-4 justify-between shadow">
              <View className="flex-row justify-between items-center">
                <View className="w-16 h-16 bg-[#E2E8F0] rounded-full items-center justify-center">
                  <Frame17 width={72} height={72} />
                </View>
                <Text className="text-gray-800 text-sm tracking-wider">
                  **** 4012
                </Text>
              </View>
              <Text className="text-2xl font-semibold text-[#0F172A]">
                $584,403
              </Text>
            </View>

            {/* Card 3 */}
            <View className="w-52 h-32 bg-[#1E293B] rounded-3xl p-5 mr-4 justify-between shadow">
              <View className="flex-row justify-between items-center">
                <View className="w-16 h-16 bg-[#334155] rounded-full items-center justify-center">
                  <Frame16 width={72} height={72} />
                </View>
                <Text className="text-white text-sm tracking-wider">
                  **** 2389
                </Text>
              </View>
              <Text className="text-white text-2xl font-semibold">$23,879</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
