import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import Logo from "../../assets/logo.svg";

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="menu-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Balance Card */}
        <View className="items-center mt-4">
          <View className="bg-[#10B981] w-[220px] h-[220px] rounded-full items-center justify-center">
            <Text className="text-white text-lg font-semibold mb-1">
              Total Balance
            </Text>
            <Text className="text-white text-3xl font-bold">$214,417</Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-center mt-6 space-x-3">
          <TouchableOpacity className="bg-white px-5 py-2 rounded-full">
            <Text className="text-[#0F172A] font-semibold">Assets</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#10B981] px-5 py-2 rounded-full">
            <Text className="text-white font-semibold">Debt</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#1E293B] px-5 py-2 rounded-full">
            <Text className="text-white font-semibold">Income</Text>
          </TouchableOpacity>
        </View>

        {/* Chart */}
        <View className="mt-10 px-6">
          <Svg height="120" width="100%">
            {/* Line Path (sample curve) */}
            <Path
              d="M20 80 C 60 30, 120 50, 160 40 S 240 70, 300 60"
              stroke="#38BDF8"
              strokeWidth="2"
              fill="none"
            />
            {/* Points */}
            <Circle cx="160" cy="40" r="4" fill="#38BDF8" />
            <Circle cx="300" cy="60" r="4" fill="#10B981" />
          </Svg>

          {/* Price labels */}
          <View className="flex-row justify-between px-8 -mt-2">
            <Text className="text-white text-xs font-semibold">$174</Text>
            <Text className="text-[#10B981] text-xs font-semibold">$451</Text>
          </View>

          {/* Days */}
          <View className="flex-row justify-between mt-4 px-5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <Text key={d} className="text-white text-xs">
                {d}
              </Text>
            ))}
          </View>
        </View>

        {/* Spending Card */}
        <View className="bg-[#D1FAE5] mx-5 mt-10 rounded-2xl p-4 flex-row justify-between items-center">
          <View className="flex-row items-center space-x-3">
            <View className="w-12 h-12 bg-[#10B981] rounded-lg items-center justify-center">
              <Ionicons name="card-outline" size={22} color="#fff" />
            </View>
            <View>
              <Text className="text-[#0F172A] font-bold text-base">
                Spending.
              </Text>
              <Text className="text-[#0F172A] text-xs">
                You forgot to add debt card number at payment #1323. Add it now.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Ionicons name="close-outline" size={20} color="#0F172A" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
