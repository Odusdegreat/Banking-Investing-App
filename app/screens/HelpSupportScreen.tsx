import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HelpSupportScreen() {
  const router = useRouter();

  const helpOptions = [
    {
      id: 1,
      title: "Contact Support",
      icon: <Ionicons name="headset-outline" size={24} color="#22C55E" />,
      desc: "Chat or call our support team anytime.",
    },
    {
      id: 2,
      title: "FAQs",
      icon: <Ionicons name="help-circle-outline" size={24} color="#38BDF8" />,
      desc: "Quick answers to the most common questions.",
    },
    {
      id: 3,
      title: "Report a Problem",
      icon: <MaterialIcons name="report-problem" size={24} color="#F59E0B" />,
      desc: "Having an issue? Let us know immediately.",
    },
    {
      id: 4,
      title: "Live Chat",
      icon: (
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={24}
          color="#6366F1"
        />
      ),
      desc: "Get instant help from a live agent.",
    },
  ];

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3  p-2">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text className="text-xl font-bold text-white">Help & Support</Text>

        {/* Placeholder for spacing */}
        <View style={{ width: 32 }} />
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120, paddingHorizontal: 20 }}
      >
        <Text className="text-gray-300 mb-6 leading-6">
          We’re here to assist you with anything related to your account,
          payments, or investments. Choose an option below to get started.
        </Text>

        {helpOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            className="flex-row items-center bg-[#1E293B] rounded-2xl p-4 mb-4"
          >
            <View className="w-12 h-12 items-center justify-center bg-[#111827] rounded-xl mr-4">
              {item.icon}
            </View>
            <View className="flex-1">
              <Text className="text-white text-base font-semibold">
                {item.title}
              </Text>
              <Text className="text-gray-400 text-sm">{item.desc}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        <View className="mt-8 border-t border-gray-700 pt-5 pb-12">
          <Text className="text-white text-base font-semibold mb-2">
            Need quick help?
          </Text>

          <View className="space-y-2">
            <TouchableOpacity
              className="flex-row items-center"
              activeOpacity={0.7}
            >
              <FontAwesome name="envelope-o" size={18} color="#22C55E" />
              <Text className="ml-2 text-gray-400 text-sm">
                support@bankinvestapp.com
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center"
              activeOpacity={0.7}
            >
              <Ionicons name="call-outline" size={18} color="#38BDF8" />
              <Text className="ml-2 text-gray-400 text-sm">
                +234 800 123 4567
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
