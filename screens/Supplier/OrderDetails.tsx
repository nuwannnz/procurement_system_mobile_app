import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { BTN_STYLE, COLORS } from '../../constants/styles'

export default function OrderDetails() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Order Details</Text>

                <View style={styles.row}>
                    <Text style={styles.text}>Number of Items : </Text>
                    <Text style={styles.value}>5</Text>
                </View>

                <View>
                    <Text style={[styles.text, {textDecorationLine: "underline", marginBottom: 10}]}>Items Ordered</Text>
                </View>

                <View style={[styles.row, {backgroundColor: COLORS.accentColor}]}>
                    <Text
                        style={[styles.desValue, styles.text, { color: COLORS.textOnAccentColor }]}>Description</Text>
                    <Text
                        style={[styles.unitCostValue, styles.text, { color: COLORS.textOnAccentColor }]}>Unit Cost</Text>
                    <Text
                        style={[styles.qtyValue, styles.text, { color: COLORS.textOnAccentColor }]}>QTY</Text>
                    <Text
                        style={[styles.amountValue, styles.text, { color: COLORS.textOnAccentColor }]}>Amount</Text>
                </View>

                <View style={{marginBottom: 50}}>
                    <View style={styles.row}>
                        <Text style={styles.desValue}>Wood</Text>
                        <Text style={styles.unitCostValue}>Rs. 120</Text>
                        <Text style={styles.qtyValue}>5</Text>
                        <Text style={styles.amountValue}>Rs. 600</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.desValue}>Wood</Text>
                        <Text style={styles.unitCostValue}>Rs. 120</Text>
                        <Text style={styles.qtyValue}>5</Text>
                        <Text style={styles.amountValue}>Rs. 600</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.desValue}>Wood</Text>
                        <Text style={styles.unitCostValue}>Rs. 120</Text>
                        <Text style={styles.qtyValue}>5</Text>
                        <Text style={styles.amountValue}>Rs. 600</Text>
                    </View>
                </View>


                <View style={styles.row}>
                    <Text style={styles.text}>Sub Total</Text>
                    <Text style={styles.value}>Rs. 300</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.text}>Tax(13%)</Text>
                    <Text style={styles.value}>Rs. 30</Text>
                </View>

                <View style={[styles.row, { marginTop: 30}]}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.value}>Rs. 330</Text>
                </View>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={[BTN_STYLE.ACCENT_BUTTON, {width: 150, marginTop: 20}]}>
                        <Text style={{color: COLORS.textOnAccentColor}}>Deliver Order</Text>
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
        height: "100%",
        margin: 30,
    },

    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    text: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5
    },

    value: {
        fontSize: 15
    },

    desValue: {
        width: 85,
        fontSize: 15,
        textAlign: "center",
        paddingLeft: 5
    },

    unitCostValue: {
        width: 80,
        fontSize: 15,
        textAlign: "center"
    },

    qtyValue: {
        width: 60,
        fontSize: 15,
        textAlign: "center"
    },

    amountValue: {
        width: 60,
        fontSize: 15,
        textAlign: "center",
        paddingRight: 5
    }
})