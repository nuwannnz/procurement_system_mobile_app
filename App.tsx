import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCREENS } from "./constants/screens";
import TestComponent from "./screens/TestComponent";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.TEST} component={TestComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
