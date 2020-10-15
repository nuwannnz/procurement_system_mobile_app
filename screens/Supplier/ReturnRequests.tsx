import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import ReturnCard from './ReturnCard'

export default function ReturnRequests() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Return Requests</Text>
            <ScrollView>
                <View>
                    <ReturnCard />
                    <ReturnCard />
                    <ReturnCard />
                    <ReturnCard />
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