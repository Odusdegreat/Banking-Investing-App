import { Text, View } from "react-native";

interface BalanceCardProps {
  label: string;
  amount: string;
  color: string;
}

export default function BalanceCard({
  label,
  amount,
  color,
}: BalanceCardProps) {
  return (
    <View>
      <Text className="text-gray-400 text-sm mb-1">{label}</Text>
      <Text className="text-white text-2xl font-semibold">{amount}</Text>
      <View className={`h-1 w-28 rounded-full mt-2 bg-[${color}]`} />
    </View>
  );
}
