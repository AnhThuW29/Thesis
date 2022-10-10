import * as React from 'react';
import { Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import StartScreen from '../views/screens/StartScreen'
import HomeScreen from '../views/screens/StartScreen'
import DetailScreen from '../views/screens/StartScreen'
import LogInScreen from "../views/screens/LogInScreen"
import CustomInput from '../consts/CustomInput'
import CustomButton from '../consts/CustomButton'

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="CustomInput" component={CustomInput} />
            <Stack.Screen name="CustomButton" component={CustomButton} />
        </Stack.Navigator>
    )
}

export default StackNavigator