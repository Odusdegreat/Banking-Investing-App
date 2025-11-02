import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-[#0F172A] pt-12 px-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-6">
        <Text className="text-white text-2xl font-bold">Menu</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="space-y-6">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="flex-row items-center space-x-3"
          >
            <Ionicons name="home-outline" size={22} color="white" />
            <Text className="text-white text-lg">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("InvestingScreen")}
            className="flex-row items-center space-x-3"
          >
            <Ionicons name="trending-up-outline" size={22} color="white" />
            <Text className="text-white text-lg">Investing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("PaymentMethods")}
            className="flex-row items-center space-x-3"
          >
            <Ionicons name="card-outline" size={22} color="white" />
            <Text className="text-white text-lg">Payment Methods</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            className="flex-row items-center space-x-3"
          >
            <Ionicons name="settings-outline" size={22} color="white" />
            <Text className="text-white text-lg">Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Help")}
            className="flex-row items-center space-x-3"
          >
            <Ionicons name="help-circle-outline" size={22} color="white" />
            <Text className="text-white text-lg">Help Center</Text>
          </TouchableOpacity>

          <View className="border-t border-gray-700 my-4" />

          <TouchableOpacity className="flex-row items-center space-x-3">
            <Ionicons name="log-out-outline" size={22} color="#F87171" />
            <Text className="text-[#F87171] text-lg">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
