import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Logo from '../../assets/travelIcon.png'
import CustomButton from '../../consts/CustomButton'
import CustomInput from '../../consts/CustomInput'
import SignUpScreen from '../screens/SignUpScreen'

const SignInScreen = (props) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const validate = async () => {
        Keyboard.dismiss()
        let isValid = true
        if (!inputs.email) {
            handleError('Vui lòng nhập email', 'email')
            isValid = false
        }
        if (!inputs.password) {
            handleError('Vui lòng nhập mật khẩu', 'password')
            isValid = false
        }
        if (isValid) {
            login()
        }
    }

    const login = () => {
        setLoading(true)
        setTimeout(async () => {
            setLoading(false)
            let userData = await AsyncStorage.getItem('userData')
            if (userData) {
                userData = JSON.parse(userData)
                if (
                    inputs.email == userData.email &&
                    inputs.password == userData.password
                ) {
                    navigation.navigate('HomeScreen')
                    AsyncStorage.setItem(
                        'userData',
                        JSON.stringify({ ...userData, loggedIn: true }),
                    )
                } else {
                    Alert.alert('Error', 'Invalid Details')
                }
            } else {
                Alert.alert('Error', 'Người dùng không tồn tại')
            }
        }, 3000);
    }

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))
    }

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }))
    }

    const onSignInPress = () => {
        console.log('Log in')
    }

    const onForgotPassword = () => {
        console.log('Quên mật khẩu')
    }

    const onSignInFB = () => {
        console.log('Facebook')
    }

    const onSignInEmail = () => {
        console.log('Email')
    }
    
    const navigation = useNavigation()
    const onSignUp = () => {
        navigation.navigate('SignUpScreen')
    }



    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container} >
                    <View style={styles.header}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Đăng nhập</Text>
                        <Image source={Logo} style={styles.logo} resizeMode={'contain'} />
                    </View>

                    <View>
                        <CustomInput
                            placeholder='Tài khoản'
                            iconName='account-circle'
                            onChangeText={text => handleOnchange(text, 'email')}
                            onFocus={() => handleError(null, 'email')}
                            error={errors.email}
                        />
                        <CustomInput
                            placeholder='Mật khẩu'
                            iconName='lock'
                            onChangeText={text => handleOnchange(text, 'password')}
                            onFocus={() => handleError(null, 'password')}
                            error={errors.password}
                            password
                        />
                    </View>

                    <CustomButton
                        text='Đăng nhập'
                        onPress={onSignInPress}
                        type='Primary' />
                    <CustomButton
                        text='Quên mật khẩu?'
                        onPress={onForgotPassword}
                        type='Secondary' />
                    <CustomButton
                        text='Đăng nhập với Facebook'
                        onPress={onSignInFB}
                        bgColor='#e5efff'
                        textColor='#4765A9'
                        type='Primary' />
                    <CustomButton
                        text='Đăng nhập với Email'
                        onPress={onSignInEmail}
                        bgColor='#FAE9EA'
                        textColor='#DD4D44'
                        type='Primary' />
                    <CustomButton
                        text='Bạn chưa có tài khoản?'
                        onPress={onSignUp}
                        type='Secondary' />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        padding: 20,
        marginVertical: 50,
    },
    header: {
        alignItems: 'center'
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: 150,
        marginVertical: 20,
    },
})