import Axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, AsyncStorage } from "react-native";
import { API_URL } from "../../constants/API";
import { getAuthHeader } from "../../helpers/authHelper";
import { UserInfoType } from "../LoginComponent";
import OrderCard from "./OrderCard";

export default function DeliveredOrders() {
  const [orderList, setOrderList] = useState([]);

  const loadOrders = () => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      const orderResult = await Axios.get(
        `${API_URL}/orders/supplier/${userInfo.userData.id}`,
        getAuthHeader(userInfo.token)
      );
      console.log("orders", orderResult.data.orders);
      setOrderList(orderResult.data.orders);
    })();
  };

  useEffect(() => {
    loadOrders();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivered Orders</Text>
      <ScrollView>
        <View>
          {orderList
            .filter((o: any) => o.state === 7)
            .map((o: any) => (
              <OrderCard
                key={o.id}
                orderId={o.id}
                numOfItems={o.items.length}
                siteAddress={o.site.address}
                dateRequested={
                  new Date(o.createdAt).toISOString().split("T")[0]
                }
                requestedBy={o.owner.email}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100%",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
    marginTop: 10,
  },
});
