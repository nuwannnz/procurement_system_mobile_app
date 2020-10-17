import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SCREENS } from "../../constants/screens";
import { BTN_STYLE, COLORS } from "../../constants/styles";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome</Text>
        </View>

        <View>
          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.SUPPLIER_ITEMS);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>My items</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.INCOMING_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Incoming Orders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.SUPPLIER_DELIVERED_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Delivered Orders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.PAYMENTS_RECEIVED);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Payments Received
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.RETURN_REQUESTS);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Return Requests
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.LOGIN);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 30,
    height: "100%",
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },

  label: {
    fontWeight: "bold",
    fontSize: 15,
  },

  inputField: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  marginB: {
    marginBottom: 25,
  },

  errorMsg: {
    fontWeight: "bold",
    fontSize: 13,
    color: "red",
  },
});
