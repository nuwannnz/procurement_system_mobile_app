import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native'
import { COLORS } from '../../constants/styles';
import ApprovedOrderComponent from './ApprovedOrderComponent';
import NewOrderComponent from './NewOrderComponent';
import PendingOrderComponent from './PendingOrderComponent';
import RejectedOrderComponent from './RejectedOrderComponent';

export default function ViewOrderComponent() {

    const navigation = useNavigation();

    const [newOrder, setNewOrder] = useState(true);
    const [approvedOrder, setApprovedOrder] = useState(false);
    const [pendingOrder, setPendingOrder] = useState(false);
    const [rejectedOrder, setRejectedOrder] = useState(false);

    return (
       
            <View>
                <View style={styles.topNavBar}>
                    <View style={styles.navItemsWrap}>
                        <View style={styles.navItem}>
                            <TouchableOpacity
                            onPress={() => {
                                setApprovedOrder(false);
                                setPendingOrder(false);
                                setRejectedOrder(false);
                                setNewOrder(!newOrder);
                                }}
                            >
                            <Text
                                style={{
                                    color: newOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                                    fontWeight: newOrder ? "bold" : "normal" }}>New</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.navItem}>
                        <TouchableOpacity onPress={() => {
                            setNewOrder(false);
                            setPendingOrder(false);
                            setRejectedOrder(false);
                            setApprovedOrder(!approvedOrder);
                            }}>
                            <Text
                                style={{
                                    color: approvedOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                                    fontWeight: approvedOrder ? "bold" : "normal" }}>Approved</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.navItem}>
                            <TouchableOpacity onPress={() => {
                            setNewOrder(false);
                            setApprovedOrder(false);
                            setRejectedOrder(false);
                            setPendingOrder(!pendingOrder);
                            }}>
                            <Text
                                style={{
                                    color: pendingOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                                    fontWeight: pendingOrder ? "bold" : "normal" }}>Pending</Text>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity onPress={() => {
                            setNewOrder(false);
                            setApprovedOrder(false);
                            setPendingOrder(false);
                            setRejectedOrder(!rejectedOrder);
                            }}>
                            <Text
                                style={{
                                    color: rejectedOrder ? "#EEA47FFF" : COLORS.textOnAccentColor,
                                    fontWeight: rejectedOrder ? "bold" : "normal" }}>Rejected</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            <ScrollView>
                <View style={{ marginBottom: 100 }}>
                    {newOrder ? 
                        <View>
                            <NewOrderComponent />
                            <NewOrderComponent />
                            <NewOrderComponent />
                            <NewOrderComponent />
                        </View>
                        : null}
                    {approvedOrder ? 
                        <View>
                            <ApprovedOrderComponent />
                            <ApprovedOrderComponent />
                            <ApprovedOrderComponent />
                            <ApprovedOrderComponent />
                        </View>
                        : null}
                      {pendingOrder ? 
                        <View>
                            <PendingOrderComponent />
                            <PendingOrderComponent />
                            <PendingOrderComponent />
                            <PendingOrderComponent />
                        </View>
                        : null}
                     {rejectedOrder ? 
                        <View>
                            <RejectedOrderComponent />
                            <RejectedOrderComponent />
                            <RejectedOrderComponent />
                            <RejectedOrderComponent />
                           
                        </View>
                        : null}
                </View>
            
            </ScrollView>
                
            </View>
       
    )
}

const styles = StyleSheet.create({
    topNavBar: {
        height: 50,
        width: "100%",
        backgroundColor: COLORS.accentColor,
        marginBottom: 30,
    },
    navItemsWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        
    },
    navItem: {
        paddingRight: 20,
        paddingBottom: 10,
        borderRightWidth: 2,
    },
    cardWrap: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        margin: 30,
        marginTop: 0
    }

 
})
