import { SafeAreaView, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { defaultHeaderOptions } from "../../components/headerOptions";

const DealerScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ ...defaultHeaderOptions, title: "Dealer Dashboard" }} />

      <Text>Dealer Dashboard</Text>

      <Link href="/orders" asChild>
        <Pressable>
          <Text>Go to Orders</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default DealerScreen;
