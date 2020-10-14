import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity, ScrollView } from 'react-native'
import { BTN_STYLE, COLORS } from '../constants/styles';

export default function ReturnOrderComponent() {

    const [selectedItemValue, setSelectedItemValue] = useState("Wood");
    const [remove, setRemove] = useState(true);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Return Goods</Text>
                <View>
                    <View style={{marginBottom: 20}}>
                        <Text style={styles.label}>Supplier Name</Text>
                        <TextInput style={styles.inputField}/>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={styles.label}>Invoice Number</Text>
                        <TextInput style={styles.inputField}/>
                    </View>

                    <View style={{marginBottom: 20}}>
                        <Text style={styles.label}>Returning Items</Text>
                        <View style={styles.inputField}>
                            <Picker
                                    selectedValue={selectedItemValue}
                                    mode="dropdown"
                                    style={{ height: 25}}
                                    onValueChange={(itemValue, itemIndex) => setSelectedItemValue(itemValue)}
                                >
                                    <Picker.Item label="Wood" value="Wood" />
                                    <Picker.Item label="Cement" value="Cement" />
                                </Picker>  
                        </View>
                    </View>

                    <View>
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
                    </View>

                    <View style={{alignItems: "center", marginTop: 10}}>
                        <TouchableOpacity style={[BTN_STYLE.ACCENT_BUTTON, {width: 150}]}>
                            <Text style={{color: COLORS.textOnAccentColor, fontSize: 16}}>Return</Text>
                        </TouchableOpacity>
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
        margin: 30,
        height: "100%"
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    },

    label: {
        fontWeight: "bold",
        fontSize: 15
    },

    inputField: {
        height: 50,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
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

})
