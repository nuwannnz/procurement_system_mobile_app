import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SCREENS } from '../constants/screens';
import { BTN_STYLE, COLORS } from '../constants/styles'

export default function DraftOrder() {

    const navigation = useNavigation();

    return (
        <View >
            <View style={styles.cardWrap}>
                <Text style={{fontWeight: "bold", fontSize: 15}}>Order 001</Text>
                <View style={styles.row}>
                    <View style={{marginRight: 10}}>
                        <TouchableOpacity
                            style={[BTN_STYLE.ACCENT_BUTTON, { width: 60, height: 35 }]}
                            onPress={() => {
                                navigation.navigate(SCREENS.DETAILS_ORDER)
                            }}
                        >
                            <Text style={{color: COLORS.textOnAccentColor}}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={[BTN_STYLE.ACCENT_DENGER_BUTTON, {width: 60, height: 35}]}>
                            <Text style={{color: COLORS.textOnAccentColor}}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    cardWrap: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#eee",
        elevation: 5,
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    }
})
