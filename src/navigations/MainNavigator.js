import React, { useContext, useEffect, useState, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../views/screens/HomeScreen'
import StartScreen from '../views/screens/StartScreen'
import DetailsScreen from '../views/screens/DetailsScreen'
import SignInScreen from '../views/screens/SignInScreen'
import SignUpScreen from '../views/screens/SignUpScreen'
import FavoriteScreen from '../views/screens/FavoriteScreen'
import AccountScreen from '../views/screens/AccountScreen'
import TourScreen from '../views/screens/Tour/TourScreen'
import HotelScreen from '../views/screens/Hotel/HotelScreen'
import TourPost from '../views/screens/Tour/tourPost'
import HotelPost from '../views/screens/Hotel/hotelPost'
import Post from '../views/screens/post'
import MyCart from '../views/screens/MyCart'
import EditTour from '../views/screens/Tour/EditTour'
import Test from '../views/screens/test'


import TabNavigation from './TabNavigation'

import { useLogin } from '../context/LoginProvider'

const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

function HomeStackScreen() {
    return (
        <Stack.Navigator initialRouteName='TabScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='StartScreen' component={StartScreen} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
            <Stack.Screen name='TourScreen' component={TourScreen} />
            <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen name='AccountScreen' component={AccountScreen} />
            <Stack.Screen name='HotelScreen' component={HotelScreen} />
            <Stack.Screen name='TourPost' component={TourPost} />
            <Stack.Screen name='HotelPost' component={HotelPost} />
            <Stack.Screen name='Post' component={Post} />
            <Stack.Screen name='MyCart' component={MyCart} />
            <Stack.Screen name='EditTour' component={EditTour} />
            <Stack.Screen name='Test' component={Test} />


            {/* tabs */}
            <Stack.Screen name='TabScreen' component={TabNavigation} />

        </Stack.Navigator>
    )
}

function AuthStack() {
   
    return (
        <Stack.Navigator screenOptions={{ 
            headerShown: false, 
             
        }}>
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
        </Stack.Navigator>
    )
}


const MainNavigator = () => {

    const { isLoggedIn } = useLogin()

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <HomeStackScreen /> : <AuthStack />
            }
            {/* <HomeStackScreen /> */}

        </NavigationContainer>
    )

}

export default MainNavigator