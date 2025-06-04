// DashboardScreen.tsx
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import HamburgerMenu from "../components/HamburgerMenu";

const { width } = Dimensions.get("window");

const tabs = ["Dashboard Report", "Target", "Summary", "Sales Summary"];

const tiles = [
  { title: "Attendance", value: "Present" },
  { title: "Date Started At", value: "2025-05-29 09:00 AM" },
  { title: "Date Ended At", value: "2025-05-29 06:00 PM" },
  { title: "Today Visit", value: "5" },
  { title: "Plant Visit", value: "2" },
  { title: "Unplanned Visit", value: "1" },
  { title: "Total Orders", value: "12" },
  { title: "Trade Orders", value: "7" },
  { title: "PPC Orders", value: "5" },
];


const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState("Dashboard Report");
  const [menuOpen, setMenuOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(-260)).current; // hidden offscreen left

  const openMenu = () => {
    setMenuOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -260,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setMenuOpen(false);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Hamburger Icon and Tabs */}
      <View className="border-b border-gray-300 bg-blue-600 px-4 pt-3 pb-1">
        {/* Top Row: Menu Icon + Heading */}
        <View className="flex-row items-center justify-between mb-2">
          <Pressable onPress={openMenu} className="p-2">
            <Feather name="menu" size={28} color="white" />
          </Pressable>
          <Text className="text-white text-xl font-bold flex-1 text-center mr-8">
            Dashboard Report
          </Text>
        </View>
      </View>

      {/* Tabs below heading */}
      <View className="flex-row justify-around bg-blue-100 py-2">
        <View className="flex-row flex-wrap justify-around bg-blue-100 py-2">
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)}>
              <Text
                className={`text-sm ${
                  activeTab === tab
                    ? "text-blue-800 font-bold"
                    : "text-gray-500"
                } px-3 py-2`}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Tiles */}
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View className="flex-row flex-wrap justify-between mt-6">
          {tiles.map((tile, idx) => (
            <View
              key={idx}
              className="w-[48%] h-32 bg-gray-100 
               p-4 mb-4 shadow-sm flex flex-col"
            >
              {/* Heading at the top */}
              <Text className="text-gray-800 font-semibold text-center text-base mb-2">
                {tile.title}
              </Text>

              {/* Value vertically centered in remaining space */}
              <View className="flex-1 justify-center">
                <Text className="text-blue-700 font-bold text-lg text-center">
                  {tile.value}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Hamburger Menu Drawer */}
     {menuOpen && (
  <HamburgerMenu menuOpen={menuOpen} slideAnim={slideAnim} closeMenu={closeMenu} />
)}
    </SafeAreaView>
  );
};

export default DashboardScreen;
