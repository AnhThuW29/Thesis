import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, TextInput, Text, ScrollView, FlatList } from "react-native"
import COLORS from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TourScreen = ({ navigation }) => {
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
                
                <Text>Xu hướng</Text>
                <Text>Tin khuyến mãi</Text>
                <View>

                </View>
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
})