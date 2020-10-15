import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import OrderCard from './OrderCard'

export default function DeliveredOrders() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivered Orders</Text>
            <ScrollView>
                <View>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
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