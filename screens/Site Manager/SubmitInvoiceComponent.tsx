import { useNavigation } from "@react-navigation/native";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { AsyncStorage, Button, Text, ToastAndroid, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { API_URL } from "../../constants/API";
import { BTN_STYLE, COLORS } from "../../constants/styles";
import { getAuthHeader } from "../../helpers/authHelper";
import { UserInfoType } from "../LoginComponent";

export default function SubmitInvoiceComponent() {
  const navigation = useNavigation();

  const [orderList, setOrderList] = useState([]);

  const loadOrders = () => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      const orderResult = await Axios.get(
        `${API_URL}/orders/of/${userInfo.userData.id}`,
        getAuthHeader(userInfo.token)
      );
      console.log("orders", orderResult.data.orders);
      setOrderList(orderResult.data.orders);
    })();
  };

  const submitInvoice = (orderId: string, totalValue: number) => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      await Axios.post(
        `${API_URL}/invoice`,
        { totalValue, orderId, ownerId: userInfo.userData.id },
        getAuthHeader(userInfo.token)
      );
      ToastAndroid.show("Submited invoice successfully", ToastAndroid.SHORT);
      loadOrders();
    })();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <View>
      {orderList
        .filter((o: any) => o.state === 1)
        .map((o: any) => (
          <View
            key={o.id}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 5,
              backgroundColor: "#fff",
              borderRadius: 10,
              alignItems: "center",
              margin: 10,
            }}
          >
            <View>
              <Text>Order id: {o.id} </Text>
              <Text>Supplier : {o.supplier.email} </Text>
            </View>
            <Text>Rs. {o.totalPrice} </Text>
            <TouchableOpacity
              style={[BTN_STYLE.ACCENT_BUTTON, { width: 100, height: 35 }]}
              onPress={() => {
                submitInvoice(o.id, o.totalPrice);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Submit Invoice
              </Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}
