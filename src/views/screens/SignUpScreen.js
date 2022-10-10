import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import COLORS from '../../consts/colors'
import CustomButton from '../../consts/CustomButton'
import CustomInput from '../../consts/CustomInput'
import SignInScreen from '../screens/SignInScreen'

const SignUpScreen = () => {

    const [inputs, setInputs] = useState({
        email: '',
        fullname: '',
        phone: '',
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
        if (!inputs.fullname) {
            handleError('Vui lòng nhập họ và tên', 'fullname')
            isValid = false
        }
        if (!inputs.phone) {
            handleError('Vui lòng nhập số điện thoại', 'phone')
            isValid = false
        }
        if (!inputs.password) {
            handleError('Vui lòng nhập mật khẩu', 'password')
            isValid = false
        } else if (inputs.password.length < 5) {
            handleError('Độ dài mật khẩu tối thiểu là 5', 'password');
            isValid = false;
        }

        if (isValid) {
            signup()
        }
    }

    const login = () => {
        setLoading(true)
        setTimeout(() => {
            try {
                setLoading(false)
                AsyncStorage.setItem('userData', JSON.stringify(inputs))
                navigation.navigate('SignInScreen')
            } catch (error) {
                Alert.alert('Error', 'Có điều gì đó không đúng')
            }
        }, 3000)
    }

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }))
    }

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }))
    }

    const onSignUpPress = () => {
        console.log('Log in')
    }

    const onSignUpFB = () => {
        console.log('Facebook')
    }

    const onSignUpEmail = () => {
        console.log('Email')
    }

    const onTermsAndPolicy = () => {
        console.log('Điều khoản và chính sách')
    }

    const navigation = useNavigation()
    const onSignIn = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container} >
                <Text style={styles.title}>Đăng kí tài khoản mới</Text>
                <CustomInput
                    onChangeText={text => handleOnchange(text, 'email')}
                    onFocus={() => handleError(null, 'email')}
                    placeholder='Tài khoản'
                    iconName='email'
                    error={errors.email}
                />
                <CustomInput
                    onChangeText={text => handleOnchange(text, 'fullname')}
                    onFocus={() => handleError(null, 'fullname')}
                    placeholder='Nhập họ và tên'
                    iconName='account-circle'
                    error={errors.fullname}
                />
                <CustomInput
                    onChangeText={text => handleOnchange(text, 'phone')}
                    onFocus={() => handleError(null, 'phone')}
                    placeholder='Nhập số điện thoại'
                    iconName='phone'
                    keyboardType='numeric'
                    error={errors.phone}
                />
                <CustomInput
                    onChangeText={text => handleOnchange(text, 'password')}
                    onFocus={() => handleError(null, 'password')}
                    placeholder='Nhập mật khẩu'
                    iconName='lock'
                    error={errors.password} 
                    password/>

                <CustomButton
                    text='Đăng kí'
                    onPress={onSignUpPress}
                    type='Primary' />

                <Text style={styles.text}>
                    Bạn đồng ý với{''}
                    <Text style={styles.link}
                        onPress={onTermsAndPolicy}
                    > điều khoản và chính sách </Text>
                    sử dụng của chúng tôi
                </Text>

                <CustomButton
                    text='Đăng nhập với Facebook'
                    onPress={onSignUpFB}
                    bgColor='#e5efff'
                    textColor='#4765A9'
                    type='Primary' />
                <CustomButton
                    text='Đăng nhập với Email'
                    onPress={onSignUpEmail}
                    bgColor='#FAE9EA'
                    textColor='#DD4D44'
                    type='Primary' />
                <CustomButton
                    text='Bạn đã có tài khoản? Đăng nhập'
                    onPress={onSignIn}
                    type='Secondary'
                />
            </View>

        </ScrollView>

    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        marginVertical: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.primary,
        paddingBottom: 20,
    },
    text: {
        marginVertical: 20,
    },
    link: {
        color: 'orange',
    },
})