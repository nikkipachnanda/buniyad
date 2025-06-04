import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native";
import { Stack } from "expo-router";
import salesforceApi from "../../api/salesforceApi";
import { defaultHeaderOptions } from "../../components/headerOptions";

const OrdersScreen = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await salesforceApi.get("query", {
          params: {
            q: "SELECT Id, Name, description__c, rating__c FROM tiles__c",
          },
        });
        setTiles(response.data.records);
      } catch (error) {
        console.error("Error fetching tiles:", error);
      }
    };

    fetchTiles();
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Stack.Screen options={{ ...defaultHeaderOptions, title: "Orders" }} />

      <Text className="text-xl font-bold">Orders Screen</Text>

      <FlatList
        data={tiles}
        keyExtractor={(item) => item.Id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Name: {item.Name}</Text>
            <Text>Description: {item.description__c}</Text>
            <Text>Rating: {item.rating__c}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default OrdersScreen;
