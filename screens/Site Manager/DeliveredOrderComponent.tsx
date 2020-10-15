import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants/styles'

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
        fontWeight: "bold",
        width: 95,
        textAlign: "center",
        color: COLORS.textOnAccentColor,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 8
    },

    headerWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        backgroundColor: COLORS.accentColor
    },
     
    data: {
        fontSize: 15,
        width: 95,
        textAlign: "center"
    },
     
    dataWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    }
})