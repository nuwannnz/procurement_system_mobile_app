import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker, TouchableHighlight, Modal, Alert, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SCREENS } from '../../constants/screens';
import { BTN_STYLE, COLORS } from '../../constants/styles';


export default function DetailedOrderComponent() {

    const navigation = useNavigation();

    const [selectedSiteValue, setSelectedSiteValue] = useState("Kandy");
    const [selectedSupValue, setSelectedSupValue] = useState("Anne Kalin");
    const [selectedItemValue, setSelectedItemValue] = useState("Wood");
    
    const [remove, setRemove] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);


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
                        <Text style={styles.value}>2020/08/03</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>Company Name : </Text>
                        <Text style={styles.value}>ABC Company</Text>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7}}>
                        <Text style={styles.text}>Site : </Text>
                        <View style={styles.inputField}>
                            <Picker
                                selectedValue={selectedSiteValue}
                                mode="dropdown"
                                style={{ height: 25, width: 150}}
                                onValueChange={(itemValue, itemIndex) => setSelectedSiteValue(itemValue)}
                            >
                                <Picker.Item label="Kandy" value="Kandy" />
                                <Picker.Item label="Colombo" value="Colombo" />
                            </Picker>
                         </View>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 7}}>
                        <Text style={styles.text}>Supplier : </Text>
                        <View style={styles.inputField}>
                            <Picker
                                selectedValue={selectedSupValue}
                                mode="dropdown"
                                style={{ height: 25, width: 150}}
                                onValueChange={(itemValue, itemIndex) => setSelectedSupValue(itemValue)}
                            >
                                <Picker.Item label="Anne Kalin" value="Anne Kalin" />
                                <Picker.Item label="Jim Visly" value="Jim Visly" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <View style={[styles.row, {marginBottom: 5}]}>
                            <Text style={[styles.text, {textDecorationLine: "underline"}]}>Items List</Text>
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
                        <View style={styles.itemWrap}>
                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Wood</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }

                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Glass</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }

                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Metal</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }

                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Cement</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }

                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Bricks and Blocks</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }
                            
                            {remove ? 
                                <View style={styles.item}>
                                    <Text style={styles.itemText}>Pins</Text>
                                    <TouchableOpacity onPress={() => {
                                        setRemove(false)
                                    }}>
                                        <Text style={styles.removeBtn}>X</Text>
                                    </TouchableOpacity>
                                </View> : null
                            }
                        </View>
                    </View>

                    <View style={[styles.row, {marginTop: 15}]}>
                        <Text style={styles.text}>Sub Total : </Text>
                        <Text style={styles.value}>Rs. 80000</Text>
                    </View>

                    <View style={[styles.row, {marginTop: 15}]}>
                        <Text style={styles.text}>Tax(13%) : </Text>
                        <Text style={styles.value}>Rs. 100</Text>
                    </View>

                    <View style={[styles.row, {marginTop: 15}]}>
                        <Text style={styles.text}>Total : </Text>
                        <Text style={styles.value}>Rs. 80100</Text>
                    </View>

                    <View style={[styles.row, { marginTop: 10 }]}>
                        <View>
                            <TouchableOpacity
                                style={[BTN_STYLE.ACCENT_BUTTON, { width: 120 }]}
                                onPress={() => {
                                    navigation.navigate(SCREENS.DRAFTS_ORDER)
                                }}
                            >
                                <Text style={{color: COLORS.textOnAccentColor}}>Save To Drafts</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={[BTN_STYLE.ACCENT_BUTTON, {width: 120}]}>
                                <Text style={{color: COLORS.textOnAccentColor}}>Submit</Text>
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
                  
                  <View style={{marginTop: 10, marginBottom: 20}}>
                    <View style={{marginBottom: 10}}>
                        <Text style={styles.label}>Select Item</Text>
                        <View style={styles.inputField}>
                            <Picker
                                selectedValue={selectedItemValue}
                                mode="dropdown"
                                style={{ height: 25, width: 200}}
                                onValueChange={(itemValue, itemIndex) => setSelectedItemValue(itemValue)}
                            >
                                <Picker.Item label="Wood" value="Wood" />
                                <Picker.Item label="Cement" value="Cement" />
                            </Picker>  
                        </View>
                    </View>
                    
                    <View style={{marginBottom: 10}}>
                        <Text style={styles.label}>Quantity</Text>
                        <TextInput style={styles.inputField}/>  
                    </View>
                    
                    <View style={{marginBottom: 10}}>
                        <Text style={styles.label}>Comments</Text>
                        <TextInput style={styles.commentField}/>  
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
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 30,
        height: "100%"
    },

    text: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    value: {
        fontSize: 15
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
        borderColor: "#c3e6cb"
    },

    itemWrap: {
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap"
    },

    itemText: {
        fontWeight: "bold",
        color: "#155724",
        marginRight: 5
    },

    removeBtn: {
        color: "#155724",
        fontWeight: "bold",
        borderLeftWidth: 2,
        borderLeftColor: "#155724",
        paddingLeft: 10
    },

    addBtn: {
        backgroundColor: "#cce5ff",
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#b8daff"
    },

    addBtnText: {
        color: "#004085",
        fontSize: 25,
        fontWeight: "bold"
    },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    label: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#004085"
    },

    inputField: {
        height: 40,
        width: 150,
        borderColor: "#004085",
        borderWidth: 1,
        padding: 5,
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
})