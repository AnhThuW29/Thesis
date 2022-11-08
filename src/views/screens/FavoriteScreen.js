import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import COLORS from "../../consts/colors"
import Icon from "react-native-vector-icons/MaterialIcons"

const FavoriteScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                    <Icon name='arrow-back-ios' size={24} color={COLORS.white} onPress={navigation.goBack} />
                    <Text>Xin chào, Anh Thư</Text>
                    <Icon name='notifications-none' size={24} color={COLORS.white} />
                </View>
        </SafeAreaView>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.primary,
    },
})