// components/HamburgerMenu.tsx
import React from "react";
import { Animated, Pressable, Dimensions, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

type HamburgerMenuProps = {
  menuOpen: boolean;
  slideAnim: Animated.Value;
  closeMenu: () => void;
};

const menuLinks = [
  { label: "Dealer/Customer Onboard", icon: "user-plus" },
  { label: "Orders", icon: "shopping-cart" },
  { label: "Pending Dispatch", icon: "clock" },
  { label: "Invoice", icon: "file-text" },
  { label: "Outstanding", icon: "alert-circle" },
  { label: "Profile", icon: "user" },
  { label: "Feedback", icon: "message-circle" },
  { label: "Schemes", icon: "gift" },
  { label: "Surveys", icon: "clipboard" },
  { label: "Influencers", icon: "users" },
  { label: "Sites", icon: "map-pin" },
  { label: "Expense", icon: "dollar-sign" },
];

const HamburgerMenu = ({ menuOpen, slideAnim, closeMenu }: HamburgerMenuProps) => {
  if (!menuOpen) return null;

  return (
    <>
      <Pressable
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 9,
        }}
        onPress={closeMenu}
      />
      <Animated.View
        style={{
          width: 260,
          height: "100%",
          backgroundColor: "white",
          padding: 20,
          paddingTop: 60,
          transform: [{ translateX: slideAnim }],
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          shadowColor: "#000",
          shadowOffset: { width: 2, height: 0 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 10,
          zIndex: 10,
        }}
      >
        {menuLinks.map(({ label, icon }) => (
          <Pressable
            key={label}
            onPress={() => {
              closeMenu();
              switch (label) {
                case "Dealer/Customer Onboard":
                  router.push("/dealer");
                  break;
                case "Orders":
                  router.push("/orders");
                  break;
                case "Profile":
                  router.push("/profile");
                  break;
                case "Feedback":
                  router.push("/feedback");
                  break;
                case "Dealer/Customer Onboard":
                  router.push("/onboard");
                  break;
                case "Pending Dispatch":
                  router.push("/dispatch");
                  break;
                case "Invoice":
                  router.push("/invoice");
                  break;
                case "Outstanding":
                  router.push("/outstanding");
                  break;
                case "Schemes":
                  router.push("/schemes");
                  break;
                case "Surveys":
                  router.push("/surveys");
                  break;
                case "Influencers":
                  router.push("/influencers");
                  break;
                case "Sites":
                  router.push("/sites");
                  break;
                case "Expense":
                  router.push("/expense");
                  break;
                default:
                  break;
              }
            }}
            className="py-3 border-b border-gray-300 flex-row items-center"
          >
            <Feather name={icon} size={22} color="#333" style={{ marginRight: 16 }} />
            <Text className="text-lg">{label}</Text>
          </Pressable>
        ))}
      </Animated.View>
    </>
  );
};

export default HamburgerMenu;
