import { Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View className="flex-row justify-around items-center bg-white/10 py-4 rounded-3xl mx-5 mb-5">
      {/* Home */}
      <TouchableOpacity onPress={() => router.push("/screens/UserScreen")}>
        <Ionicons name="home-outline" size={22} color="white" />
      </TouchableOpacity>

      {/* Credit Card → Dashboard */}
      <TouchableOpacity onPress={() => router.push("/dashboard" as any)}>
        <Feather name="credit-card" size={22} color="white" />
      </TouchableOpacity>

      {/* Center Icon → Investing */}
      <TouchableOpacity onPress={() => router.push("/investing")}>
        <Ionicons name="grid-outline" size={22} color="white" />
      </TouchableOpacity>

      {/* Notifications */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={22} color="white" />
      </TouchableOpacity>

      {/* User */}
      <TouchableOpacity onPress={() => router.push("/home" as any)}>
        <Feather name="user" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}
