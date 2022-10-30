import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../views/screens/HomeScreen'
import StartScreen from '../views/screens/StartScreen'
import DetailsScreen from '../views/screens/DetailsScreen'
import SignInScreen from '../views/screens/SignInScreen'
import SignUpScreen from '../views/screens/SignUpScreen'
import TourScreen from '../views/screens/TourScreen'
import FavoriteScreen from '../views/screens/FavoriteScreen'
import AccountScreen from '../views/screens/AccountScreen'
import HotelScreen from '../views/screens/HotelScreen'

import { useLogin } from '../context/LoginProvider'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStackScreen() {
    return (
        <Stack.Navigator initialRouteName='StartScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='StartScreen' component={StartScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
            <Stack.Screen name='TourScreen' component={TourScreen} />
            <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='AccountScreen' component={AccountScreen} />
            <Stack.Screen name='HotelScreen' component={HotelScreen} />

        </Stack.Navigator>
    )
}

function LoginScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    )
}

function Account() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Account' component={AccountScreen} />
        </Stack.Navigator>
    )
}

const MainNavigator = () => {

    const {isLoggedIn} = useLogin()
    
    return (
        isLoggedIn ? <Account/> : 
        <Tab.Navigator
            initialRouteName='HomeStackScreen'
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: COLORS.blue },
                tabBarInactiveTintColor: COLORS.primary,
                tabBarActiveTintColor: COLORS.orange,
            }} >

            <Tab.Screen name='Đăng nhập' component={LoginScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='account-circle' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Home' component={HomeStackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='home' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Tôi' component={Account}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='account-circle' color={color} size={size} />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

export default MainNavigator