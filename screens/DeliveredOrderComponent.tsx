import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function DeliveredOrderComponent() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Delivered Orders</Text>
            <View style={styles.headerWrap}>
                <Text style={styles.header}>Order No</Text>
                <Text style={styles.header}>Delivered Date</Text>
                <Text style={styles.header}>Delivered To</Text>
            </View>

            <View style={styles.dataWrap}>
                <Text style={styles.data}>QKS255</Text>
                <Text style={styles.data}>2020/10/15</Text>
                <Text style={styles.data}>Anne Kalin</Text>
            </View>

            <View style={styles.dataWrap}>
                <Text style={styles.data}>QKS255</Text>
                <Text style={styles.data}>2020/10/15</Text>
                <Text style={styles.data}>Anne Kalin</Text>
            </View>

            <View style={styles.dataWrap}>
                <Text style={styles.data}>QKS255</Text>
                <Text style={styles.data}>2020/10/15</Text>
                <Text style={styles.data}>Anne Kalin</Text>
            </View>
        </View>
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
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20
    },

    header: {
        fontSize: 15,
        fontWeight: "bold"
    },

    headerWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
     
    data: {
        fontSize: 15
    },
     
    dataWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    }
})