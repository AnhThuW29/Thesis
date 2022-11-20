import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, ImageBackground, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
} from 'react-native-paper'

import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SignInScreen from "./SignInScreen"
import { useSelector } from "react-redux"
import axiosClient from "../../api/client"

const imgWidth = Dimensions.get('screen').width * 0.33333

const AccountScreen = ({ navigation }) => {

    const user = useSelector(state => state.account)



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri: 'https://c8.alamy.com/compfr/2eda5ta/adorable-avatar-de-vache-adorable-animal-de-ferme-dessin-a-la-main-illustration-vectorielle-isolee-2eda5ta.jpg',
                            }}
                            size={80}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 15,
                                marginBottom: 5,
                            }]}>{user.fullname}</Title>
                            <Caption style={styles.caption}>anhthu</Caption>
                        </View>
                    </View>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="place" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>Việt Nam</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{user.phone}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "#777777", marginLeft: 20 }}>{user.email}</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1
                    }]}>
                        <Title>150.000</Title>
                        <Caption>Ví</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>12</Title>
                        <Caption>Đơn hàng</Caption>
                    </View>
                </View>
                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="favorite" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Your Favorites</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="credit-card" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Payment</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }}>
                        <View style={styles.menuItem}>
                            <Icon name="support-agent" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Support</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() =>{}}>
                        <View style={styles.menuItem}>
                            <Icon name="settings" color="#FF6347" size={25} />
                            <Text style={styles.menuItemText}>Đăng xuất</Text>
                        </View>
                    </TouchableRipple>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 80,
    },

    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
})