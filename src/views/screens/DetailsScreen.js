import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, ImageBackground, StatusBar, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import COLORS from '../../consts/colors'
//import place from '../../consts/places'

const DetailsScreen = ({ navigation, route }) => {
    const place = route.params
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />

            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground style={{width:'100%', height: 400}} source={place.image}>
                    <View style={style.header}>
                        <Icon
                            name='arrow-back-ios'
                            size={28}
                            color={COLORS.white}
                            onPress={navigation.goBack} />
                        <Icon
                            name='more-vert'
                            size={28}
                            color={COLORS.white} />
                    </View>

                    <View style={style.imageDetails}>
                        <Text style={{
                            width: '70%',
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: COLORS.white,
                            marginBottom: 20,
                        }}>
                            {place.name}
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={30} color={COLORS.orange} />
                            <Text style={{
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>5.0</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={style.detailsContainer}>
                    <View style={{ flex: 0.4, bottom: 25 }}>
                        <View style={style.iconContainer}>
                            <Icon name='favorite' size={30} color={COLORS.red} />
                        </View>
                        <View>
                            <Icon name='place' size={28} color={COLORS.primary} />
                            <Text style={{
                                marginLeft: 5,
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: COLORS.primary,
                            }}>
                                {place.location}
                            </Text>
                        </View>
                        <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 20 }}>
                            Giới thiệu
                        </Text>
                    </View>
                    <ScrollView style={{ flex: 0.6, top: 35 }}>
                        <Text style={{ marginTop: 20, lineHeight: 22 }}>{place.details}</Text>
                    </ScrollView>
                </View>


                <View style={style.footer}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: COLORS.white,
                        }}
                        >$100</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: COLORS.grey,
                            marginLeft: 2,
                        }}>
                            /1 ngày
                        </Text>
                    </View>
                    <View style={style.btnBookNow}>
                        <Text style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>
                            Đăng ký ngay
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailsScreen

const style = StyleSheet.create({
    btnBookNow: {
        height: 50,
        width: 150,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: -30,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    detailsContainer: {
        top: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        flex: 0.3,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imageDetails: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        bottom: 30,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})
