import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SCREENS } from '../../constants/screens'
import { BTN_STYLE, COLORS } from '../../constants/styles'

export default function ReturnCard() {

    const navigation = useNavigation();

    return (
        <View style={styles.card}>
                <View style={styles.tagWrap}>
                    <View >
                        <Text style={styles.tag}>Items: 5</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>PO # : </Text>
                    <Text>QKS998</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Site : </Text>
                    <Text>Kandy</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.title}>Site Manager : </Text>
                    <Text>Anne Kalin</Text>
                </View>
                
                <View style={{marginTop: 20}}>
                    <View style={styles.detailsBtn}>
                        <TouchableOpacity
                            style={[BTN_STYLE.ACCENT_BUTTON, { width: 150, height: 35 }]}
                            onPress={() => {
                                navigation.navigate(SCREENS.RETURN_REQUESTS_DETAILS)
                            }}
                        >
                            <Text style={{color: COLORS.textOnAccentColor}}>View Return Goods</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
    )
}

const styles = StyleSheet.create({

    card: {
        height: 190,
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