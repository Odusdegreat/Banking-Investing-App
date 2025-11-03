import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HelpScreen() {
  const router = useRouter();

  const handleEmailSupport = () => {
    Linking.openURL("mailto:support@invetoapp.com");
  };

  const handleCallSupport = () => {
    Linking.openURL("tel:+1234567890");
  };

  return (
    <View className="flex-1 bg-[#0F172A] px-5 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-xl font-semibold">Help & Support</Text>
        <View className="w-6" /> {/* spacing balance */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Intro */}
        <Text className="text-gray-300 text-base mb-6">
          Need assistance? We’re here to help you with your INVETO account,
          payments, and more.
        </Text>

        {/* Quick Contact */}
        <View className="bg-[#1E293B] rounded-2xl p-5 mb-6">
          <Text className="text-white text-lg font-semibold mb-4">
            Contact Support
          </Text>

          <TouchableOpacity
            onPress={handleEmailSupport}
            className="flex-row items-center mb-3"
          >
            <Feather name="mail" size={20} color="#60A5FA" />
            <Text className="text-gray-300 text-base ml-3">
              Email us at support@invetoapp.com
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleCallSupport}
            className="flex-row items-center"
          >
            <Feather name="phone" size={20} color="#34D399" />
            <Text className="text-gray-300 text-base ml-3">
              Call us: +1 (234) 567-890
            </Text>
          </TouchableOpacity>
        </View>

        {/* FAQs */}
        <View className="bg-[#1E293B] rounded-2xl p-5">
          <Text className="text-white text-lg font-semibold mb-4">
            Frequently Asked Questions
          </Text>

          <View className="mb-4">
            <Text className="text-gray-200 font-medium mb-1">
              How do I reset my password?
            </Text>
            <Text className="text-gray-400 text-sm">
              Go to your account settings and tap “Reset Password.” You’ll get a
              confirmation email.
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-gray-200 font-medium mb-1">
              Where can I see my transactions?
            </Text>
            <Text className="text-gray-400 text-sm">
              You can view your transaction history on the Home screen under
              “Transactions.”
            </Text>
          </View>

          <View>
            <Text className="text-gray-200 font-medium mb-1">
              How do I contact support?
            </Text>
            <Text className="text-gray-400 text-sm">
              You can email or call us directly from this page anytime.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
