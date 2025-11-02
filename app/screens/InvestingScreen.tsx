import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Piggy from "../../assets/Group.svg";
import Logo from "../../assets/logo.svg";

export default function InvestingScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-[#FFFFFF]">INVETO</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#0F172A" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Investing Tips */}
        <View className="px-5">
          <Text className="text-lg font-semibold text-[#0F172A] mb-3">
            Investing Tips
          </Text>

          <View className="bg-[#F8FAFC] rounded-2xl p-4 flex-row items-center justify-between shadow-sm">
            <View className="mr-3">
              <View className="w-14 h-14 bg-[#E2E8F0] rounded-full items-center justify-center">
                <Piggy width={40} height={40} />
              </View>
            </View>

            <View className="flex-1 pr-3">
              <Text className="text-base font-semibold text-[#0F172A] mb-1">
                What is an ETF?
              </Text>
              <Text className="text-sm text-gray-500 mb-3">
                By James B, PHD
              </Text>

              <TouchableOpacity className="bg-[#0F172A] px-3 py-2 rounded-lg self-start">
                <Text className="text-white text-xs font-semibold">
                  LEARN MORE
                </Text>
              </TouchableOpacity>
            </View>

            <View className="w-12 h-12 bg-[#E2E8F0] rounded-full items-center justify-center">
              <Ionicons name="trending-up-outline" size={22} color="#0F172A" />
            </View>
          </View>
        </View>

        {/* My Cards */}
        <View className="mt-8 px-5">
          <Text className="text-lg font-semibold text-[#0F172A] mb-4">
            My Cards (4)
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {/* Card 1 */}
            <View className="w-52 h-32 bg-[#0F172A] rounded-3xl p-5 mr-4 justify-between shadow">
              <View className="flex-row justify-between items-center">
                <Ionicons name="card-outline" size={20} color="#fff" />
                <Text className="text-white text-sm tracking-wider">
                  **** 6175
                </Text>
              </View>
              <Text className="text-white text-2xl font-semibold">$47,417</Text>
            </View>

            {/* Card 2 */}
            <View className="w-52 h-32 bg-[#CBD5E1] rounded-3xl p-5 mr-4 justify-between shadow">
              <View className="flex-row justify-between items-center">
                <Ionicons name="card-outline" size={20} color="#0F172A" />
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
                <Ionicons name="card-outline" size={20} color="#fff" />
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
