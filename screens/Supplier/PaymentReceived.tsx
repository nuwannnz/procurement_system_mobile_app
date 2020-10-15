import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import OrderCard from './OrderCard'
import PaymentOrderCard from './PaymentOrderCard'

export default function PaymentReceived() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Payments Received</Text>
            <ScrollView>
                <View>
                    <PaymentOrderCard />
                    <PaymentOrderCard />
                    <PaymentOrderCard />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%"
    },

    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        marginTop: 10
    },
})
