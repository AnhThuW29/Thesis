import React, { useState } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, TextInput, Text, ScrollView, FlatList, Dimensions, TouchableOpacity, ImageBackground } from "react-native"
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import places from '../../consts/places'


const { width } = Dimensions.get('screen')

const TourScreen = ({ navigation }) => {
    const tourCategories = ['tour thiên nhiên', 'tour biển', 'tour tham quan', 'tour gia đình']
    const [selectedIndex, setSelectedIndex] = useState(0)

    const TourTopicList = (item, key) => {
        return (
            <View style={styles.categoryContainer}>
                {tourCategories.map((item, index) => (
                    <View
                        key={index} style={{
                            ...styles.tourList,
                            backgroundColor:
                                selectedIndex == index
                                    ? COLORS.orange
                                    : COLORS.primary
                        }} >
                        <Text>{item}</Text>
                    </View>

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
                    style={styles.cardImage}
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

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar translucent={false} backgroundColor={COLORS.white} />
            <View style={styles.header}>
                <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                <Text>Xin chào, Anh Thư</Text>
                <Icon name='more-horiz' size={24} color={COLORS.white} />
            </View>
            <View style={styles.inputContainer}>
                <Icon name='search' size={24} />
                <TextInput
                    placeholder="Tìm kiếm"
                    style={{ color: COLORS.grey, paddingLeft: 5 }}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>Vị trí hiện tại của bạn: Ninh Kiều</Text>

                <View>
                    <FlatList
                        snapToAlignment={width - 20}
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={tourCategories}
                        renderItem={(item, index) => <TourTopicList item={item} />}
                        keyExtractor={(item) => item.key}
                    />

                    
                </View>
                <View style={{marginTop: 20}}>
                <FlatList
                        contentContainerStyle={{ paddingLeft: 20 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={places}
                        renderItem={({ item }) => <Card place={item} />}
                    />
                </View>

                {/* <TourTopicList /> */}

            </ScrollView>
        </SafeAreaView>
    )
}

export default TourScreen

const styles = StyleSheet.create({
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
        height: 50,
        width: '88%',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        position: 'absolute',
        top: 70,
        flexDirection: 'row',
        paddingLeft: 20,
        marginHorizontal: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    sectionTitle: {
        paddingVertical: 15,
        marginHorizontal: 20,
        marginTop: 50,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tourList: {
        height: 40,
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
})