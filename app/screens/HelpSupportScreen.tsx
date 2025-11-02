import BottomNav from "@/components/BottomNav";
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
      icon: <Ionicons name="headset-outline" size={26} color="#2563eb" />,
      desc: "Chat or call our support team anytime.",
    },
    {
      id: 2,
      title: "FAQs",
      icon: <Ionicons name="help-circle-outline" size={26} color="#22c55e" />,
      desc: "Quick answers to the most common questions.",
    },
    {
      id: 3,
      title: "Report a Problem",
      icon: <MaterialIcons name="report-problem" size={26} color="#f59e0b" />,
      desc: "Having an issue? Let us know immediately.",
    },
    {
      id: 4,
      title: "Live Chat",
      icon: (
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={26}
          color="#6366f1"
        />
      ),
      desc: "Get instant help from a live agent.",
    },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-5 pt-14 pb-5 border-b border-gray-100">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-3 rounded-full bg-gray-100 p-2"
        >
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Help & Support
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-5 pt-4 mb-20"
      >
        <Text className="text-gray-500 mb-6 leading-5">
          We’re here to assist you with anything related to your account,
          payments, or investments. Choose an option below to get started.
        </Text>

        {helpOptions.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            className="flex-row items-center bg-gray-50 rounded-2xl p-4 mb-3"
          >
            <View className="w-12 h-12 items-center justify-center bg-gray-100 rounded-xl mr-4">
              {item.icon}
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">
                {item.title}
              </Text>
              <Text className="text-gray-500 text-sm">{item.desc}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
          </TouchableOpacity>
        ))}

        <View className="mt-8 border-t border-gray-200 pt-5 pb-12">
          <Text className="text-gray-700 text-base font-semibold mb-2">
            Need quick help?
          </Text>
          <View className="space-y-2">
            <TouchableOpacity
              className="flex-row items-center"
              activeOpacity={0.7}
            >
              <FontAwesome name="envelope-o" size={18} color="#2563eb" />
              <Text className="ml-2 text-gray-600 text-sm">
                support@bankinvestapp.com
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center"
              activeOpacity={0.7}
            >
              <Ionicons name="call-outline" size={18} color="#22c55e" />
              <Text className="ml-2 text-gray-600 text-sm">
                +234 800 123 4567
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
