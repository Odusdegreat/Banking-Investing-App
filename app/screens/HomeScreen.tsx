import ActivityCard from "@/components/ActivityCard";
import BottomNav from "@/components/BottomNav";
import TransactionItem from "@/components/TransactionItem";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../../assets/logo.svg";

export default function HomeScreen({ navigation }: any) {
  const savingsProgress = useRef(new Animated.Value(0)).current;
  const assetsProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(savingsProgress, {
      toValue: 80,
      duration: 1000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();

    Animated.timing(assetsProgress, {
      toValue: 60,
      duration: 1000,
      delay: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [assetsProgress, savingsProgress]);

  return (
    <View className="flex-1 bg-[#0F172A]">
      <ScrollView className="flex-1 px-5 pt-12">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center space-x-2">
            <Logo width={28} height={28} />
            <Text className="text-white text-xl font-semibold">INVETO</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
            <Ionicons name="menu-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold">Hi, Odus!</Text>
          <Text className="text-gray-400 text-base">Here`s your balance.</Text>
        </View>

        {/* Balance Summary */}
        <View className="flex-row justify-between mb-8">
          {/* Savings */}
          <View className="flex-1 mr-2 bg-[#1E293B] rounded-2xl p-4">
            <Text className="text-gray-400 text-xs mb-1">SAVINGS</Text>
            <Text className="text-white text-xl font-semibold mb-2">
              $15,615
            </Text>

            <View className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <Animated.View
                style={{
                  height: 8,
                  backgroundColor: "#22C55E",
                  borderRadius: 9999,
                  width: savingsProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                }}
              />
            </View>
          </View>

          {/* Assets */}
          <View className="flex-1 ml-2 bg-[#1E293B] rounded-2xl p-4">
            <Text className="text-gray-400 text-xs mb-1">ASSETS</Text>
            <Text className="text-white text-xl font-semibold mb-2">
              $9,615
            </Text>

            <View className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <Animated.View
                style={{
                  height: 8,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 9999,
                  width: assetsProgress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                }}
              />
            </View>
          </View>
        </View>

        {/* Activities */}
        <Text className="text-gray-300 text-lg font-semibold mb-3">
          Activities
        </Text>
        <View className="flex-row justify-between mb-8">
          <ActivityCard
            label="Account"
            icon={<Ionicons name="person-outline" size={24} color="white" />}
          />
          <ActivityCard
            label="Privacy"
            icon={<Feather name="shield" size={24} color="white" />}
          />
          <ActivityCard
            label="Help"
            icon={<Feather name="help-circle" size={24} color="white" />}
          />
        </View>

        {/* Transactions */}
        <Text className="text-gray-300 text-lg font-semibold mb-3">
          Transactions
        </Text>

        <View className="space-y-4 mb-10">
          <TransactionItem
            title="Food & Beverage"
            subtitle="Five Lods • Feb 21"
            amount="+28.11"
            color="#22C55E40"
            icon={
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={20}
                color="#22C55E"
              />
            }
          />
          <TransactionItem
            title="Shopping"
            subtitle="H&M 1257 • Jan 14"
            amount="-157.64"
            color="#EF444420"
            icon={<Feather name="shopping-bag" size={20} color="#F87171" />}
          />
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
