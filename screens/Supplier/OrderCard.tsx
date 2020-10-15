import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SCREENS } from '../../constants/screens'
import { BTN_STYLE, COLORS } from '../../constants/styles'

export default function Order() {

    const navigation = useNavigation();

    return (
        
            <View style={styles.card}>
                <View style={styles.tagWrap}>
                    <View >
                        <Text style={styles.tag}>High</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>PO # : </Text>
                    <Text>QKS998</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Company : </Text>
                    <Text>Kandy HardWare</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Delivery Address : </Text>
                    <Text>No.37, Kandy</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Date Requested : </Text>
                    <Text>2020/3/17</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Requested By : </Text>
                    <Text>John Smith</Text>
                </View>
                <View style={[styles.row, {marginBottom: 12}]}>
                    <Text style={styles.title}>Number Of Items : </Text>
                    <Text>5</Text>
                </View>
                <View>
                    <View style={styles.detailsBtn}>
                        <TouchableOpacity
                            style={[BTN_STYLE.ACCENT_BUTTON, { width: 100, height: 35 }]}
                            onPress={() => {
                                navigation.navigate(SCREENS.SUPPLIER_ORDER_DETAILS)
                            }}
                        >
                            <Text style={{color: COLORS.textOnAccentColor}}>View Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        
    )
}

const styles = StyleSheet.create({

    card: {
        height: 250,
        width: 300,
        backgroundColor: "#eee",
        elevation: 5,
        borderRadius: 10,
        marginBottom: 20,
        margin: 30,
        marginTop: 10,
        padding: 20
    },

    title: {
        fontWeight: "bold",
       fontSize: 12
    },

    row: {
        flexDirection: "row"
    },

    tag: {
        backgroundColor: "red",
        borderRadius: 20,
        padding: 8,
        paddingTop: 3,
        paddingBottom: 3,
        color: COLORS.textOnAccentColor,
        fontWeight: "bold"
    },

    tagWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    detailsBtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
})