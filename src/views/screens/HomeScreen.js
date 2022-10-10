import React from 'react'
import { SafeAreaView, TextInput, StyleSheet, StatusBar, ScrollView, View, Text, Dimensions, ImageBackground, FlatList, TouchableOpacity, Button } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import places from '../../consts/places'
import DetailsScreen from '../screens/DetailsScreen'
import SignUpScreen from '../screens/SignUpScreen'

const { width } = Dimensions.get('screen')

const HomeScreen = ({ navigation }) => {

    const CategoryIcons = [
        <Icon name='flight' size={25} color={COLORS.primary} />,
        <Icon name='beach-access' size={25} color={COLORS.primary} />,
        <Icon name='near-me' size={25} color={COLORS.primary} />,
        <Icon name='place' size={25} color={COLORS.primary} />,
    ]

    const ListCategories = () => {
        return (
            <View style={style.categoryContainer}>
                {CategoryIcons.map((icon, index) => (
                    <View key={index} style={style.iconContainer}>{icon}</View>
                ))}
            </View>
        )
    }

    const Card = ({ place }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', place)}
            >
                <ImageBackground
                    style={style.cardImage}
                    source={place.image}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}>
                        {place.name}
                    </Text>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='place' size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                {place.location}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name='star' size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>
                                5.0
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const RecommendedCard = ({ place }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('DetailsScreen', place)}>
                <ImageBackground
                    style={style.rmCardIamge}
                    source={place.image}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}>
                        {place.name}
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            //alignItems: 'flex-end'
                        }}
                    >
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='place' size={22} color={COLORS.white} />
                                <Text style={{ color: COLORS.white }}>{place.location}</Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Icon name='star' size={22} color={COLORS.white} />
                                <Text style={{ color: COLORS.white }}>5.0</Text>
                            </View>
                        </View>

                        <Text style={{ height: 30, overflow: 'hidden', color: COLORS.white, fontSize: 13 }}>
                            {place.details}
                        </Text>
                    </View>
                </ImageBackground>

            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />
            <View style={style.header}>
                <Icon name='sort' size={28} color={COLORS.white} />
                <Icon name='notifications-none' size={28} color={COLORS.white} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    backgroundColor: COLORS.primary,
                    height: 120,
                    paddingHorizontal: 20,
                }}>
                    <View>
                        <Text style={style.headerTitle}>Cùng khám phá</Text>
                        <Text style={style.headerTitle}>top địa điểm ở Việt Nam</Text>
                        <View style={style.inputContainer}>
                            <Icon name='search' size={28} />
                            <TextInput
                                placeholder="Tìm kiếm"
                                style={{ color: COLORS.grey }}
                            />
                        </View>
                    </View>
                </View>

                <ListCategories />

                <Text style={style.sectionTitle}>Địa điểm</Text>

                <View>
                    <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <Card place={item} />}
                    />
                    <Text style={style.sectionTitle}>Tham khảo</Text>
                    <FlatList
                        snapToAlignment={width - 20}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <RecommendedCard place={item} />}
                    />
                </View>

                {/* <SignUpScreen /> */}

            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeScreen

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
    headerTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 23,
    },

    inputContainer: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 90,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    rmCardIamge: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    }
})
