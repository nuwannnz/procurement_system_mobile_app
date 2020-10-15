import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCREENS } from "./constants/screens";
import AddOrderComponent from "./screens/Site Manager/AddOrderComponent";
import DeliveredOrderComponent from "./screens/Site Manager/DeliveredOrderComponent";
import DetailedOrderComponent from "./screens/Site Manager/DetailedOrderComponent";
import DraftsOrderComponent from "./screens/Site Manager/DraftsOrderComponent";
import HomePageComponent from "./screens/Site Manager/HomePageComponent";
import LoginComponent from "./screens/LoginComponent";
import ReturnOrderComponent from "./screens/Site Manager/ReturnOrderComponent";
import ViewOrderComponent from "./screens/Site Manager/ViewOrderComponent";
import HomePage from "./screens/Supplier/HomePage";
import IncomingOrders from "./screens/Supplier/IncomingOrders";
import OrderDetails from "./screens/Supplier/OrderDetails";
import DeliveredOrders from "./screens/Supplier/DeliveredOrders";
import PaymentReceived from "./screens/Supplier/PaymentReceived";
import ReturnRequests from "./screens/Supplier/ReturnRequests";
import ReturnRequestsDetails from "./screens/Supplier/ReturnRequestsDetails";
import PaymentReceivedDetails from "./screens/Supplier/PaymentReceivedDetails";



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
        <Stack.Screen name={SCREENS.SUPPLIER_HOME} component={HomePage} />
        <Stack.Screen name={SCREENS.INCOMING_ORDER} component={IncomingOrders} />
        <Stack.Screen name={SCREENS.SUPPLIER_ORDER_DETAILS} component={OrderDetails} />
        <Stack.Screen name={SCREENS.SUPPLIER_DELIVERED_ORDER} component={DeliveredOrders} />
        <Stack.Screen name={SCREENS.PAYMENTS_RECEIVED} component={PaymentReceived} />
        <Stack.Screen name={SCREENS.RETURN_REQUESTS} component={ReturnRequests} />
        <Stack.Screen name={SCREENS.RETURN_REQUESTS_DETAILS} component={ReturnRequestsDetails} />
        <Stack.Screen name={SCREENS.PAYMENTS_RECEIVED_DETAILS} component={PaymentReceivedDetails} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
