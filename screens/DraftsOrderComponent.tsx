import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import DraftOrder from './DraftOrder'

export default function DraftsOrderComponent() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Drafts Orders</Text>
                <DraftOrder />
                <DraftOrder />
                <DraftOrder />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 30,
        height: "100%"
    },

    title: {
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: 20,
        textAlign: "center"
    },
})