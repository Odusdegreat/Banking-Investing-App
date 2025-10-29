import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ActivityCardProps {
  label: string;
  icon: ReactNode;
  borderColor?: string;
}

export default function ActivityCard({
  label,
  icon,
  borderColor,
}: ActivityCardProps) {
  return (
    <TouchableOpacity
      className={`bg-white/10 w-[30%] py-6 rounded-2xl items-center ${
        borderColor ? `border ${borderColor}` : ""
      }`}
    >
      <View>{icon}</View>
      <Text className="text-white mt-2 text-sm">{label}</Text>
    </TouchableOpacity>
  );
}
