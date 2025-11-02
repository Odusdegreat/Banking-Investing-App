import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HelpSupportScreen() {
  const helpOptions = [
    {
      id: 1,
      title: "Contact Support",
      icon: <Ionicons name="headset-outline" size={26} color="#2563eb" />,
      desc: "Reach out to our customer support team for assistance.",
    },
    {
      id: 2,
      title: "FAQs",
      icon: <Ionicons name="help-circle-outline" size={26} color="#22c55e" />,
      desc: "Find answers to commonly asked questions.",
    },
    {
      id: 3,
      title: "Report a Problem",
      icon: <MaterialIcons name="report-problem" size={26} color="#f59e0b" />,
      desc: "Let us know if you’re experiencing any issues.",
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
      desc: "Chat with a support agent in real time.",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-5 py-6">
      <View className="flex-row items-center mb-5">
        <TouchableOpacity className="mr-3">
          <Ionicons name="arrow-back" size={26} color="#111827" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Help & Support</Text>
      </View>

      <Text className="text-base text-gray-500 mb-6">
        We’re here to help you with anything related to your account, payments,
        or investments.
      </Text>

      {helpOptions.map((item) => (
        <TouchableOpacity
          key={item.id}
          className="flex-row items-center bg-gray-50 rounded-2xl p-4 mb-3"
          activeOpacity={0.8}
        >
          <View className="w-12 h-12 items-center justify-center bg-gray-100 rounded-xl mr-4">
            {item.icon}
          </View>
          <View className="flex-1">
            <Text className="text-lg font-semibold text-gray-900">
              {item.title}
            </Text>
            <Text className="text-gray-500 text-sm">{item.desc}</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#9ca3af" />
        </TouchableOpacity>
      ))}

      <View className="mt-8 border-t border-gray-200 pt-5">
        <Text className="text-gray-700 text-base font-semibold mb-2">
          Need immediate help?
        </Text>
        <View className="space-y-2">
          <TouchableOpacity
            className="flex-row items-center"
            activeOpacity={0.7}
          >
            <FontAwesome name="envelope-o" size={18} color="#2563eb" />
            <Text className="ml-2 text-gray-600 text-sm">
              support@bankingapp.com
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
  );
}
