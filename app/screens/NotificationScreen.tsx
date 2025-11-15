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
    <View className="flex-1 bg-[#0F172A] pt-14">
      {/* The stray {" "} line has been removed */}

      {/* slightly reduced top padding */}
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 pb-4">
        <View className="flex-row items-center space-x-3">
          <Logo width={28} height={28} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>
      </View>
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        <View className="px-6 mt-8 space-y-6">
          {/* Page Title */}
          <View className="space-y-2">
            <Text className="text-2xl font-semibold text-white">
              Notifications
            </Text>
            <Text className="text-gray-400 text-sm">
              Stay up to date with your activity and alerts.
            </Text>
          </View>

          {/* Notifications List */}
          <View className="space-y-5">
            {notifications.map((item) => (
              <View
                key={item.id}
                className="flex-row items-start bg-white/8 rounded-2xl p-4"
                style={{
                  borderColor: "rgba(255,255,255,0.03)",
                  borderWidth: 1,
                }}
              >
                {/* Icon */}
                <View
                  className="w-12 h-12 rounded-full items-center justify-center"
                  style={{ backgroundColor: item.color + "20" }}
                >
                  <Ionicons name={item.icon} size={22} color={item.color} />
                </View>

                {/* Text */}
                <View className="flex-1 ml-4">
                  <Text className="text-white font-semibold text-base mb-1">
                    {item.title}
                  </Text>
                  <Text className="text-gray-300 text-sm mb-1">
                    {item.message}
                  </Text>
                  <Text className="text-gray-500 text-xs">{item.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
