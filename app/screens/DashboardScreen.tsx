import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

import BottomNav from "@/components/BottomNav";
import Logo from "../../assets/logo.svg";

const { width, height } = Dimensions.get("window");

const ASSETS = [
  { name: "Savings Account", amount: 15615 },
  { name: "Stocks", amount: 12450 },
  { name: "Crypto Wallet", amount: 8320 },
];

const DEBTS = [
  { name: "Credit Card", amount: 1230 },
  { name: "Loan", amount: 5600 },
];

const INCOME = [
  { name: "Salary", amount: 5000 },
  { name: "Freelance", amount: 1200 },
];

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<"Assets" | "Debt" | "Income">(
    "Debt"
  );
  const [showSpendingCard, setShowSpendingCard] = useState(true);

  const tabs = ["Assets", "Debt", "Income"] as const;
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const getActiveData = () => {
    if (activeTab === "Assets") return ASSETS;
    if (activeTab === "Debt") return DEBTS;
    return INCOME;
  };

  const generatePath = (data: { amount: number }[]) => {
    if (data.length === 0) return "";
    const maxValue = Math.max(...data.map((d) => d.amount)) * 1.1;
    const spacing = (width * 0.8) / (data.length - 1 || 1);

    return data
      .map((item, i) => {
        const x = 20 + i * spacing;
        const y = 80 - (item.amount / maxValue) * 60;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };

  const activeData = getActiveData();
  const chartPath = generatePath(activeData);

  return (
    <View className="flex-1 bg-[#0F172A]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-12 pb-4">
        <View className="flex-row items-center space-x-2">
          <Logo width={width * 0.07} height={width * 0.07} />
          <Text className="text-xl font-bold text-white">INVETO</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={width * 0.07} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 140 }}
      >
        {/* Balance Card */}
        <View className="items-center mt-4">
          <View
            style={{
              backgroundColor: "#10B981",
              width: width * 0.55,
              height: width * 0.55,
              borderRadius: width * 0.55,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: width * 0.045,
                color: "white",
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              Total Balance
            </Text>
            <Text
              style={{
                fontSize: width * 0.09,
                color: "white",
                fontWeight: "700",
              }}
            >
              $
              {activeData
                .reduce((sum, item) => sum + item.amount, 0)
                .toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row justify-center mt-6 space-x-3">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? "#10B981" : "#1E293B",
                paddingHorizontal: width * 0.04,
                paddingVertical: width * 0.02,
                borderRadius: 999,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: width * 0.04,
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart */}
        <View className="mt-10 px-6">
          <Svg height={height * 0.18} width="100%">
            <Path d={chartPath} stroke="#38BDF8" strokeWidth="2" fill="none" />
            {activeData.map((item, i) => {
              const spacing = (width * 0.8) / (activeData.length - 1 || 1);
              const x = 20 + i * spacing;
              const y =
                80 -
                (item.amount / Math.max(...activeData.map((d) => d.amount))) *
                  60;
              return <Circle key={i} cx={x} cy={y} r={4} fill="#10B981" />;
            })}
          </Svg>

          <View className="flex-row justify-between px-8 -mt-2">
            <Text
              style={{
                color: "#fff",
                fontSize: width * 0.03,
                fontWeight: "600",
              }}
            >
              ${Math.min(...activeData.map((d) => d.amount)).toLocaleString()}
            </Text>
            <Text
              style={{
                color: "#10B981",
                fontSize: width * 0.03,
                fontWeight: "600",
              }}
            >
              ${Math.max(...activeData.map((d) => d.amount)).toLocaleString()}
            </Text>
          </View>

          <View className="flex-row justify-between mt-4 px-5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <Text
                key={`${d}-${i}`}
                style={{ color: "white", fontSize: width * 0.03 }}
              >
                {d}
              </Text>
            ))}
          </View>
        </View>

        {/* Tab Content */}
        <View className="mt-6">
          {activeData.map((item, i) => (
            <View
              key={`${item.name}-${i}`}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#1E293B",
                marginHorizontal: width * 0.04,
                marginVertical: 6,
                borderRadius: 12,
                padding: width * 0.04,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: width * 0.04,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#10B981",
                  fontWeight: "700",
                  fontSize: width * 0.04,
                }}
              >
                ${item.amount.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* Spending Card */}
        {showSpendingCard && (
          <View
            style={{
              backgroundColor: "#D1FAE5",
              marginHorizontal: width * 0.04,
              marginTop: 20,
              borderRadius: 20,
              padding: width * 0.04,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: width * 0.03,
              }}
            >
              <View
                style={{
                  width: width * 0.12,
                  height: width * 0.12,
                  backgroundColor: "#10B981",
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="card-outline"
                  size={width * 0.06}
                  color="#fff"
                />
              </View>

              <View>
                <Text
                  style={{
                    color: "#0F172A",
                    fontWeight: "700",
                    fontSize: width * 0.045,
                  }}
                >
                  Spending
                </Text>
                <Text style={{ color: "#0F172A", fontSize: width * 0.03 }}>
                  You forgot to add debt card number at payment #1323. Add it
                  now.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setShowSpendingCard(false)}>
              <Ionicons
                name="close-outline"
                size={width * 0.05}
                color="#0F172A"
              />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
}
