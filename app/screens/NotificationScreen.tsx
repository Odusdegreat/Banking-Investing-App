import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import Logo from "../../assets/logo.svg";

export default function NotificationsScreen() {
  const notifications: {
    id: number;
    title: string;
    message: string;
    time: string;
    icon: React.ComponentProps<typeof Ionicons>["name"];
    color: string;
  }[] = [
    {
      id: 1,
      title: "Deposit Successful",
      message: "You deposited $500 into your savings account.",
      time: "2h ago",
      icon: "checkmark-circle-outline",
      color: "#22C55E",
    },
    {
      id: 2,
      title: "New Investment Tip",
      message: "Learn how ETFs can help diversify your portfolio.",
      time: "5h ago",
      icon: "trending-up-outline",
      color: "#3B82F6",
    },
    {
      id: 3,
      title: "Security Notice",
      message: "Your password was changed successfully.",
      time: "1d ago",
      icon: "lock-closed-outline",
      color: "#F97316",
    },
    {
      id: 4,
      title: "Payment Reminder",
      message: "Your card bill of $240 is due tomorrow.",
      time: "2d ago",
      icon: "card-outline",
      color: "#EAB308",
    },
  ];

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View className="px-5 mt-2">
          <Text className="text-2xl font-semibold text-white mb-3">
            Notifications
          </Text>
          <Text className="text-gray-400 mb-6">
            Stay up to date with your activity and alerts.
          </Text>

          {notifications.map((item) => (
            <View
              key={item.id}
              className="bg-white/10 rounded-2xl p-4 mb-4 flex-row items-start space-x-3"
            >
              <View
                className="w-10 h-10 rounded-full items-center justify-center"
                style={{ backgroundColor: item.color + "30" }}
              >
                <Ionicons name={item.icon} size={22} color={item.color} />
              </View>

              <View className="flex-1">
                <Text className="text-white font-semibold">{item.title}</Text>
                <Text className="text-gray-400 text-sm mb-1">
                  {item.message}
                </Text>
                <Text className="text-gray-500 text-xs">{item.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
