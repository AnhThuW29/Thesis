import React, { useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, ImageBackground, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native'

import { useLogin } from '../../context/LoginProvider'

const Test = () => {
    const { signOut } = useLogin()

    return (
        <SafeAreaView>
            <Text>Test Screen</Text>
            <Button title='Sign out' onPress={signOut} />
        </SafeAreaView>
    )
}

export default Test