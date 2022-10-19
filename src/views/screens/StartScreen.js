import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native'
import COLORS from '../../consts/colors'
import HomeScreen from '../screens/HomeScreen'

const StartScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../../assets/poster.jpg')}>
                <View style={style.details}>
                    <Text style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
                        Khám phá Việt Nam
                    </Text>
                    <Text style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>
                         cùng chúng tôi.
                    </Text>
                    <Text style={{color: COLORS.black, lineHeight: 25, marginTop: 15}}>
                        Đăng nhập hoặc đăng ký để có thêm nhiều ưu đãi đặc biệt.
                    </Text>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <View style={style.btn}>
                            <Text style={{fontWeight: 'bold',}}>Bắt đầu</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default StartScreen

const style = StyleSheet.create({
    details: {
        height: '40%',
        bottom: -10,
        position: 'absolute',
        paddingHorizontal: 30,
    },
    btn: {
        height: 50,
        width: 120,
        backgroundColor: COLORS.white,
        marginTop: 15,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


