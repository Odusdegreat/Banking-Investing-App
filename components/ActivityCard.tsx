import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface ActivityCardProps {
  label: string;
  icon: ReactNode;
  borderColor?: string;
  onPress?: () => void;
}

export default function ActivityCard({
  label,
  icon,
  borderColor,
  onPress,
}: ActivityCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-white/10 w-[30%] py-6 rounded-2xl items-center justify-center ${
        borderColor ? `border ${borderColor}` : ""
      }`}
    >
      <View>{icon}</View>
      <Text className="text-white mt-2 text-sm font-medium">{label}</Text>
    </TouchableOpacity>
  );
}
