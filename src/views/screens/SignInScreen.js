import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Logo from '../../assets/orangeLogo.png'
import CustomButton from '../../consts/CustomButton'
import CustomInput from '../../consts/CustomInput'
import SignUpScreen from '../screens/SignUpScreen'
import { isValidEmail, isValidObjectField, updateError } from '../../utils/methods'
import client from '../../api/client'
import { useLogin } from '../../context/LoginProvider'
import { ErrorMessage } from 'formik'


const SignInScreen = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userInfo

    const [error, setError] = useState('')
    const { setIsLoggedIn, setProfile } = useLogin()

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value })
    }

    const isValidForm = () => {
        if (!isValidObjectField(userInfo))
            return updateError('Điền vào ô trống', setError)

        if (!isValidEmail(email))
            return updateError('Email không đúng', setError)

        // nữa nhớ check lại đk
        if (!password.trim() || password.length < 8)
            return updateError('Mật khẩu không đúng', setError)

        return true
    }

    const onSignInPress = async () => {
        if (isValidForm()) {
            try {
                const res = await client.post('/sign-in', { ...userInfo })

                if (res.data.success) {
                    setUserInfo({ email: '', password: '' })
                    setIsLoggedIn(true)
                }
            } catch (err) {
                console.log('Error: ', err.message)
            }
        }
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

                    {error ?
                        (<Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
                            {error}
                        </Text>)
                        : null}
                    <View>
                        <CustomInput
                            placeholder='Email'
                            iconName='account-circle'
                            onChangeText={value => handleOnChangeText(value, 'email')}
                            autoCapitalize='none'
                            value={email}
                        // error={error.email}
                        />
                        <CustomInput
                            placeholder='Mật khẩu'
                            iconName='lock'
                            onChangeText={value => handleOnChangeText(value, 'password')}
                            password
                            value={password}
                        // error={error.password}

                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <CustomButton
                            text='Đăng nhập'
                            onPress={onSignInPress}
                            type='Primary'
                            widthBtn='50%' />
                    </View>
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