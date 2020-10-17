import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  AsyncStorage,
} from "react-native";
import axios from "axios";
import { COLORS } from "../../constants/styles";
import { UserInfoType } from "../LoginComponent";
import ApprovedOrderComponent from "./ApprovedOrderComponent";
import NewOrderComponent from "./NewOrderComponent";
import PendingOrderComponent from "./PendingOrderComponent";
import RejectedOrderComponent from "./RejectedOrderComponent";
import { API_URL } from "../../constants/API";
import { getAuthHeader } from "../../helpers/authHelper";

export default function ViewOrderComponent() {
  const navigation = useNavigation();

  const [newOrder, setNewOrder] = useState(true);
  const [approvedOrder, setApprovedOrder] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(false);
  const [rejectedOrder, setRejectedOrder] = useState(false);

  const [orderList, setOrderList] = useState([]);

  const loadOrders = () => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      const orderResult = await axios.get(
        `${API_URL}/orders/of/${userInfo.userData.id}`,
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
    <View>
      <View style={styles.topNavBar}>
        <View style={styles.navItemsWrap}>
          <View style={styles.navItem}>
            <TouchableOpacity
              onPress={() => {
                setApprovedOrder(false);
                setPendingOrder(false);
                setRejectedOrder(false);
                setNewOrder(!newOrder);
              }}
            >
              <Text
                style={{
                  color: newOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                  fontWeight: newOrder ? "bold" : "normal",
                }}
              >
                New
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity
              onPress={() => {
                setNewOrder(false);
                setPendingOrder(false);
                setRejectedOrder(false);
                setApprovedOrder(!approvedOrder);
              }}
            >
              <Text
                style={{
                  color: approvedOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                  fontWeight: approvedOrder ? "bold" : "normal",
                }}
              >
                Approved
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navItem}>
            <TouchableOpacity
              onPress={() => {
                setNewOrder(false);
                setApprovedOrder(false);
                setRejectedOrder(false);
                setPendingOrder(!pendingOrder);
              }}
            >
              <Text
                style={{
                  color: pendingOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                  fontWeight: pendingOrder ? "bold" : "normal",
                }}
              >
                Pending
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                setNewOrder(false);
                setApprovedOrder(false);
                setPendingOrder(false);
                setRejectedOrder(!rejectedOrder);
              }}
            >
              <Text
                style={{
                  color: rejectedOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                  fontWeight: rejectedOrder ? "bold" : "normal",
                }}
              >
                Rejected
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          {newOrder ? (
            <View>
              {orderList
                .filter((o: any) => o.state === 3)
                .map((o: any) => (
                  <NewOrderComponent
                    key={o.id}
                    orderId={o.id}
                    numOfItems={o.items.length}
                    dateRequested={
                      new Date(o.createdAt).toISOString().split("T")[0]
                    }
                    requestedBy={o.owner.email}
                  />
                ))}
            </View>
          ) : null}
          {approvedOrder ? (
            <View>
              {orderList
                .filter((o: any) => o.state === 3)
                .map((o: any) => (
                  <ApprovedOrderComponent
                    key={o.id}
                    orderId={o.id}
                    numOfItems={o.items.length}
                    dateRequested={
                      new Date(o.createdAt).toISOString().split("T")[0]
                    }
                    requestedBy={o.owner.email}
                  />
                ))}
            </View>
          ) : null}
          {pendingOrder ? (
            <View>
              {orderList
                .filter((o: any) => o.state === 3)
                .map((o: any) => (
                  <PendingOrderComponent
                    key={o.id}
                    orderId={o.id}
                    numOfItems={o.items.length}
                    dateRequested={
                      new Date(o.createdAt).toISOString().split("T")[0]
                    }
                    requestedBy={o.owner.email}
                  />
                ))}
            </View>
          ) : null}
          {rejectedOrder ? (
            <View>
              {orderList
                .filter((o: any) => o.state === 2)
                .map((o: any) => (
                  <RejectedOrderComponent
                    key={o.id}
                    orderId={o.id}
                    numOfItems={o.items.length}
                    rejectMsg={o.approveComment}
                    dateRequested={
                      new Date(o.createdAt).toISOString().split("T")[0]
                    }
                    requestedBy={o.owner.email}
                  />
                ))}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavBar: {
    height: 50,
    width: "100%",
    backgroundColor: COLORS.accentColor,
    marginBottom: 30,
  },
  navItemsWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  navItem: {
    paddingRight: 20,
    paddingBottom: 10,
    borderRightWidth: 2,
  },
  cardWrap: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
    marginTop: 0,
  },
});
