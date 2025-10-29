import ActivityCard from "@/components/ActivityCard";
import BalanceCard from "@/components/BalanceCard";
import BottomNav from "@/components/BottomNav";
import TransactionItem from "@/components/TransactionItem";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import Logo from "../../assets/logo.svg";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#0F172A]">
      <ScrollView className="flex-1 px-5 pt-12">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center space-x-2">
            <Logo width={28} height={28} />
            <Text className="text-white text-xl font-semibold">INVETO</Text>
          </View>
          <Ionicons name="menu-outline" size={24} color="white" />
        </View>

        {/* Greeting */}
        <View className="mb-6">
          <Text className="text-white text-2xl font-bold">Hi, Arthur!</Text>
          <Text className="text-gray-400 text-base">Here`s Your Balance.</Text>
        </View>

        {/* Balances */}
        <View className="flex-row justify-between mb-8">
          <BalanceCard label="SAVINGS" amount="$15,615" color="#22C55E" />
          <BalanceCard label="ASSETS" amount="$9,615" color="#3B82F6" />
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

      {/* Bottom Nav - Normal position */}
      <BottomNav />
    </View>
  );
}
