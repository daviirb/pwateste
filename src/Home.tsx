import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>PWA using EXPO</Text>
      <StatusBar style="auto" />
    </View>
  );
}
