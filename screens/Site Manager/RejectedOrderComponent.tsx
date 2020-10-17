import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Alert,
} from "react-native";
import { BTN_STYLE, COLORS } from "../../constants/styles";
import { OrderComponentType } from "./NewOrderComponent";

export default function RejectedOrderComponent({
  dateRequested,
  numOfItems,
  orderId,
  requestedBy,
  rejectMsg,
}: OrderComponentType) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.tagWrap}>
          <View>
            <Text style={styles.tag}>Low</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>PO # : </Text>
          <Text>{orderId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Date Requested : </Text>
          <Text>{dateRequested}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Requested By : </Text>
          <Text>{requestedBy}</Text>
        </View>
        <View style={[styles.row, { marginBottom: 12 }]}>
          <Text style={styles.title}>Number Of Items : </Text>
          <Text>{numOfItems}</Text>
        </View>
        <View style={styles.btnWrap}>
          <View>
            <TouchableOpacity style={styles.rejectedWrap}>
              <Text style={{ color: "red", fontWeight: "bold" }}>Rejected</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[BTN_STYLE.ACCENT_BUTTON, { width: 100, height: 35 }]}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={{ color: COLORS.textOnAccentColor }}>
                View Reason
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Model View */}
      <View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#721c24",
                  }}
                >
                  Rejected Reason
                </Text>

                <View style={styles.reasonMsgWrap}>
                  <Text style={styles.modalText}>{rejectMsg}</Text>
                </View>

                <TouchableHighlight
                  style={[
                    BTN_STYLE.ACCENT_DENGER_BUTTON,
                    { width: 80, height: 40 },
                  ]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>OK</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 300,
    backgroundColor: "#eee",
    elevation: 5,
    borderRadius: 10,
    marginBottom: 20,
    margin: 30,
    marginTop: 10,
    padding: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 12,
  },

  row: {
    flexDirection: "row",
  },

  tag: {
    backgroundColor: "gray",
    borderRadius: 20,
    padding: 8,
    paddingTop: 3,
    paddingBottom: 3,
    color: COLORS.textOnAccentColor,
    fontWeight: "bold",
  },

  tagWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  btnWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rejectedWrap: {
    borderWidth: 2,
    borderColor: "#dc3545",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 35,
    borderRadius: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#f8d7da",
    borderRadius: 20,
    borderColor: "#f5c6cb",
    padding: 50,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    width: 200,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#721c24",
  },
  reasonMsgWrap: {
    borderWidth: 2,
    borderColor: "#dc3545",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 0,
  },
});
