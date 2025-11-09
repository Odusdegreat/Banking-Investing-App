import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Frame16 from "../../assets/Frame 16.svg";
import Frame17 from "../../assets/Frame 17.svg";
import Piggy from "../../assets/Group.svg";
import Logo from "../../assets/logo.svg";

export default function InvestingScreen() {
  return (
    <View className="flex-1 bg-[#0F172A] pt-12">
      {/* Header */}
      <View className="flex-row items-center px-5 mb-8 mt-3">
        <Logo width={28} height={28} />
        <Text className="text-white text-xl font-semibold ml-2">INVETO</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Investing Tips */}
        <View className="px-5 mb-8">
          <Text className="text-lg font-semibold text-white mb-4">
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
        <View className="px-5 mb-8">
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

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
