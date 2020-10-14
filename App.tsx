import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCREENS } from "./constants/screens";
import AddOrderComponent from "./screens/AddOrderComponent";
import DeliveredOrderComponent from "./screens/DeliveredOrderComponent";
import DetailedOrderComponent from "./screens/DetailedOrderComponent";
import DraftsOrderComponent from "./screens/DraftsOrderComponent";
import HomePageComponent from "./screens/HomePageComponent";
import LoginComponent from "./screens/LoginComponent";
import ReturnOrderComponent from "./screens/ReturnOrderComponent";
import ViewOrderComponent from "./screens/ViewOrderComponent";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={SCREENS.LOGIN} component={LoginComponent} />
        <Stack.Screen name={SCREENS.HOME} component={HomePageComponent} />
        <Stack.Screen name={SCREENS.CREATE_ORDER} component={AddOrderComponent} />
        <Stack.Screen name={SCREENS.VIEW_ORDER} component={ViewOrderComponent} />
        <Stack.Screen name={SCREENS.DETAILS_ORDER} component={DetailedOrderComponent} />
        <Stack.Screen name={SCREENS.DRAFTS_ORDER} component={DraftsOrderComponent} />
        <Stack.Screen name={SCREENS.RETURN_ORDER} component={ReturnOrderComponent} />
        <Stack.Screen name={SCREENS.DELIVERED_ORDER} component={DeliveredOrderComponent} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
