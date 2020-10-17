import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SCREENS } from "../../constants/screens";
import { BTN_STYLE, COLORS } from "../../constants/styles";

export default function HomePageComponent() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome To ABC Construction</Text>
        </View>

        <View>
          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.CREATE_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Create Purchase Order
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.VIEW_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Purchase Order
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.SUBMIT_INVOICE);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Submit Invoice
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.DRAFTS_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Draft Orders
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.RETURN_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Return Goods
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.marginB}>
            <TouchableOpacity
              style={BTN_STYLE.ACCENT_BUTTON}
              onPress={() => {
                navigation.navigate(SCREENS.DELIVERED_ORDER);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                Delivered Orders
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
