import { ReactNode } from "react";
import { Text, View } from "react-native";

interface TransactionItemProps {
  title: string;
  subtitle: string;
  amount: string;
  icon: ReactNode;
  color: string;
}

export default function TransactionItem({
  title,
  subtitle,
  amount,
  icon,
  color,
}: TransactionItemProps) {
  return (
    <View className="flex-row justify-between items-center bg-white/5 rounded-2xl px-4 py-3">
      <View className="flex-row items-center space-x-3">
        <View
          className={`h-10 w-10 rounded-full items-center justify-center bg-[${color}]`}
        >
          {icon}
        </View>
        <View>
          <Text className="text-white text-base font-semibold">{title}</Text>
          <Text className="text-gray-400 text-sm">{subtitle}</Text>
        </View>
      </View>
      <Text className="text-base font-semibold text-white">{amount}</Text>
    </View>
  );
}
