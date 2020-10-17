import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableHighlight,
  Modal,
  Alert,
  TextInput,
  AsyncStorage,
  ToastAndroid,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SCREENS } from "../../constants/screens";
import { BTN_STYLE, COLORS } from "../../constants/styles";
import { UserInfoType } from "../LoginComponent";
import { API_URL } from "../../constants/API";
import { getAuthHeader } from "../../helpers/authHelper";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type SelectedItemRecord = {
  item: any;
  qty: number;
};

export default function AddOrderComponent() {
  const navigation = useNavigation();

  const [selectedSiteValue, setSelectedSiteValue] = useState("Kandy");
  const [selectedSupValue, setSelectedSupValue] = useState("Anne Kalin");

  const [modalVisible, setModalVisible] = useState(false);

  const [siteList, setSiteList] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null);

  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [displayDatePicker, setDisplayDatePicker] = useState(false);

  const [selectedSupplierId, setSelectedSupplierId] = useState(-1);

  const [itemList, setItemList] = useState<any[]>([]);
  const [selectedItemValue, setSelectedItemValue] = useState(-1);
  const [selectedItemQty, setSelectedItemQty] = useState(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItemRecord[]>([]);

  const [subTotal, setSubTotal] = useState(0);

  const loadData = () => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;

      const siteResult = await axios.get(
        `${API_URL}/sites`,
        getAuthHeader(userInfo.token)
      );
      setSiteList(siteResult.data.sites);

      const itemResult = await axios.get(
        `${API_URL}/items`,
        getAuthHeader(userInfo.token)
      );

      setItemList(itemResult.data.items);
    })();
  };

  const calcSubTotal = () => {
    let subTotal = 0;
    selectedItems.forEach((i) => (subTotal += i.item.price * i.qty));
    setSubTotal(subTotal);
  };

  const submitOrder = () => {
    (async () => {
      const userInfo = JSON.parse(
        (await AsyncStorage.getItem("auth")) as string
      ) as UserInfoType;

      await axios.post(
        `${API_URL}/orders`,
        {
          description: "",
          totalPrice: subTotal + (subTotal * 13) / 100,
          supplierId: selectedSupplierId,
          ownerId: userInfo.userData.id,
          siteId: (selectedSite as any).id,
          itemIdList: selectedItems.map((i) => ({
            itemId: i.item.id,
            qty: i.qty,
          })),
        },
        getAuthHeader(userInfo.token)
      );

      ToastAndroid.show("Order created successfully", ToastAndroid.SHORT);
      navigation.goBack();
    })();
  };

  useEffect(() => {
    calcSubTotal();
  }, [selectedItems.length]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>Purchase Order # : </Text>
            <Text style={styles.value}>QKS225</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Order Date : </Text>
            <Text style={styles.value}>2020/07/31</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Delivery Date : </Text>
            {/* <Text style={styles.value}>2020/08/03</Text> */}
            <TouchableOpacity onPress={() => setDisplayDatePicker(true)}>
              <Text>{deliveryDate.toISOString().split("T")[0]}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={displayDatePicker}
              mode="date"
              onConfirm={(d) => {
                setDeliveryDate(d);
                setDisplayDatePicker(false);
              }}
              onCancel={() => setDisplayDatePicker(false)}
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Company Name : </Text>
            <Text style={styles.value}>ABC Company</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 7,
            }}
          >
            <Text style={styles.text}>Site : </Text>
            <Picker
              selectedValue={selectedSite ? (selectedSite as any).id : -1}
              mode="dropdown"
              style={{ height: 23, width: 120 }}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedSite(siteList[itemIndex - 1]);
              }}
            >
              <Picker.Item label="Select a site" value={-1} />
              {siteList.map((s: any) => (
                <Picker.Item key={s.id} label={s.name} value={s.id} />
              ))}
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 7,
            }}
          >
            <Text style={styles.text}>Supplier : </Text>
            <Picker
              selectedValue={selectedSupplierId}
              mode="dropdown"
              style={{ height: 23, width: 140 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedSupplierId(itemValue)
              }
            >
              <Picker.Item label="Select a supplier" value={-1} />
              {selectedSite &&
                (selectedSite as any).users.map((u: any) => (
                  <Picker.Item key={u.id} label={u.email} value={u.id} />
                ))}
            </Picker>
          </View>

          <View style={{ marginTop: 10 }}>
            <View style={[styles.row, { marginBottom: 5 }]}>
              <Text style={styles.text}>Items List : </Text>
              <View>
                <TouchableOpacity
                  style={styles.addBtn}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                >
                  <Text style={styles.addBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {/* selected items */}
              {selectedItems.map((s) => (
                <View key={s.item.id} style={styles.item}>
                  <Text style={styles.itemText}>{s.item.name}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedItems([
                        ...selectedItems.filter((i) => i.item.id !== s.item.id),
                      ]);
                    }}
                  >
                    <Text style={styles.removeBtn}>X</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.row, { marginTop: 15 }]}>
            <Text style={styles.text}>Sub Total : </Text>
            <Text style={styles.value}>Rs. {subTotal}</Text>
          </View>

          <View style={[styles.row, { marginTop: 15 }]}>
            <Text style={styles.text}>Tax(13%) : </Text>
            <Text style={styles.value}>Rs. {(subTotal * 13) / 100}</Text>
          </View>

          <View style={[styles.row, { marginTop: 15 }]}>
            <Text style={styles.text}>Total : </Text>
            <Text style={styles.value}>
              Rs. {subTotal + (subTotal * 13) / 100}
            </Text>
          </View>

          <View style={[styles.row, { marginTop: 20 }]}>
            <View>
              <TouchableOpacity
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 120 }]}
                onPress={() => {
                  navigation.navigate(SCREENS.DRAFTS_ORDER);
                }}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>
                  Save To Drafts
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={[BTN_STYLE.ACCENT_BUTTON, { width: 120 }]}
                onPress={() => submitOrder()}
              >
                <Text style={{ color: COLORS.textOnAccentColor }}>Submit</Text>
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
                      fontSize: 30,
                      color: "#004085",
                    }}
                  >
                    Add Item Details
                  </Text>

                  <View style={{ marginTop: 10, marginBottom: 20 }}>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.label}>Select Item</Text>
                      <View style={styles.inputField}>
                        <Picker
                          selectedValue={selectedItemValue}
                          mode="dropdown"
                          style={{ height: 25, width: 200 }}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedItemValue(itemValue)
                          }
                        >
                          <Picker.Item label="Select an item" value={-1} />
                          {selectedSupplierId !== -1 &&
                            itemList
                              .filter(
                                (i: any) => i.supplierId === selectedSupplierId
                              )
                              .map((i: any) => (
                                <Picker.Item
                                  key={i}
                                  label={i.name}
                                  value={i.id}
                                />
                              ))}
                        </Picker>
                      </View>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.label}>Quantity</Text>
                      <TextInput
                        style={styles.inputField}
                        onChangeText={(val) =>
                          setSelectedItemQty(parseInt(val, 10))
                        }
                      />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                      <Text style={styles.label}>Comments</Text>
                      <TextInput style={styles.commentField} />
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
                        disabled={
                          selectedItemValue === -1 || selectedItemQty === 0
                        }
                        onPress={() => {
                          if (
                            selectedItemValue !== -1 ||
                            selectedItemQty !== 0
                          ) {
                            setSelectedItems([
                              ...selectedItems,
                              {
                                item: itemList.find(
                                  (i: any) => i.id === selectedItemValue
                                ),
                                qty: selectedItemQty,
                              },
                            ]);
                            setSelectedItemQty(0);
                            setSelectedItemValue(-1);
                          }
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>Add</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
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
    justifyContent: "space-between",
    margin: 30,
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
