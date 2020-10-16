import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { BTN_STYLE } from "../../constants/styles";
import axios from "axios";
import { UserInfoType } from "../LoginComponent";
import { API_URL } from "../../constants/API";
import { getAuthHeader } from "../../helpers/authHelper";

const ItemCard = (props: {
  itemId: number;
  name: string;
  price: number;
  onDelete: (itemId: number) => void;
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: "#fff",
      }}
    >
      <Text>{props.itemId}</Text>
      <Text>{props.name}</Text>
      <View style={{ display: "flex" }}>
        <Text style={{ fontSize: 17, fontWeight: "500" }}>
          Rs. {props.price}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            BTN_STYLE.ACCENT_DENGER_BUTTON,
            {
              width: 48,
              padding: 3,
            },
          ]}
          onPress={() => {
            props.onDelete(props.itemId);
          }}
        >
          <Text style={styles.textStyle}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function MyItems() {
  const [modalVisible, setModalVisible] = useState(false);

  const [itemList, setItemList] = useState<any[]>([]);

  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [isItemAdding, setIsItemAdding] = useState(false);

  const loadItems = () => {
    (async () => {
      setItemList([]);
      setIsLoading(true);
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      const result = await axios.get(
        `${API_URL}/items/supplier/${userInfo.userData.id}`,
        getAuthHeader(userInfo.token)
      );
      setIsLoading(false);
      if (result.data) {
        setItemList(result.data.items);
      }
    })();
  };

  const addItem = () => {
    (async () => {
      setIsItemAdding(true);
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;
      const itemDao = {
        name: itemName,
        price: itemPrice,
        supplierId: userInfo.userData.id,
      };

      await axios.post(
        `${API_URL}/items`,
        itemDao,
        getAuthHeader(userInfo.token)
      );
      setIsItemAdding(false);
      setModalVisible(!modalVisible);
      loadItems();
      setItemName("");
      setItemPrice(0);
    })();
  };

  const deleteItem = (itemId: number) => {
    Alert.alert(
      "Delete item",
      "Delete this item permanently?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            (async () => {
              const userInfo = JSON.parse(
                (await AsyncStorage.getItem("auth")) as string
              ) as UserInfoType;

              await axios.delete(
                `${API_URL}/items/${itemId}`,
                getAuthHeader(userInfo.token)
              );
              loadItems();
            })();
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <View style={[styles.container, { position: "relative" }]}>
      {isLoading && <Text>Loading items...</Text>}
      <View style={{ position: "absolute", bottom: -5, right: -5 }}>
        <TouchableOpacity
          style={[
            BTN_STYLE.ACCENT_BUTTON,
            {
              width: 48,
              height: 48,
              borderRadius: 50,
            },
          ]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>

      <View>
        {itemList.map((i) => (
          <ItemCard
            key={i.id}
            itemId={i.id}
            name={i.name}
            price={i.price}
            onDelete={deleteItem}
          />
        ))}
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
                    fontSize: 30,
                    color: "#004085",
                  }}
                >
                  Add new Item
                </Text>

                <View style={{ marginTop: 10, marginBottom: 20 }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput
                      style={styles.inputField}
                      onChangeText={(val) => setItemName(val)}
                      value={itemName}
                    />
                  </View>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={styles.label}>Price (Rs): </Text>
                    <TextInput
                      style={styles.inputField}
                      onChangeText={(val) => {
                        if (isNaN(parseFloat(val))) {
                          setItemPrice(0);
                        } else {
                          setItemPrice(parseFloat(val));
                        }
                      }}
                      value={`${itemPrice}`}
                    />
                  </View>
                </View>

                <View style={styles.row}>
                  <View>
                    <TouchableHighlight
                      style={[
                        BTN_STYLE.ACCENT_ADD_ITEM_BUTTON,
                        { width: 80, height: 40, marginRight: 20 },
                      ]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}
                    >
                      <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableHighlight>
                  </View>

                  <View>
                    <TouchableHighlight
                      style={[
                        BTN_STYLE.ACCENT_ADD_ITEM_BUTTON,
                        { width: 80, height: 40 },
                      ]}
                      onPress={() => {
                        addItem();
                      }}
                    >
                      <Text style={styles.textStyle}>Add</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                <View>{isItemAdding && <Text>Adding item...</Text>}</View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 15,
    height: "100%",
  },

  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  value: {
    fontSize: 15,
  },

  item: {
    padding: 10,
    paddingBottom: 2,
    paddingTop: 2,
    backgroundColor: "#d4edda",
    borderRadius: 20,
    margin: 5,
    fontWeight: "bold",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#c3e6cb",
  },

  itemWrap: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  itemText: {
    fontWeight: "bold",
    color: "#155724",
    marginRight: 5,
  },

  removeBtn: {
    color: "#155724",
    fontWeight: "bold",
    borderLeftWidth: 2,
    borderLeftColor: "#155724",
    paddingLeft: 10,
  },

  addBtn: {
    backgroundColor: "#cce5ff",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#b8daff",
  },

  addBtnText: {
    color: "#004085",
    fontSize: 25,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#004085",
  },

  inputField: {
    height: 50,
    width: 200,
    borderColor: "#004085",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  commentField: {
    height: 150,
    width: 200,
    borderColor: "#004085",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  modalView: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#cce5ff",
    borderColor: "#b8daff",
    borderWidth: 2,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    width: 160,
    marginBottom: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#004085",
  },
});
