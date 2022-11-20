import React, { useContext, useEffect, useState } from 'react'
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
import TabNavigation from './TabNavigation'
import { useSelector } from 'react-redux'

// import { useLogin } from '../context/LoginProvider'

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
            {/* tabs */}
            <Stack.Screen name='TabScreen' component={TabNavigation} />

        </Stack.Navigator>
    )
}

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignInScreen' component={SignInScreen} />
            {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen} /> */}
        </Stack.Navigator>
    )
}

// function PostTab() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='Post' component={Post} />
//             <Stack.Screen name='TourPost' component={TourPost} />
//             {/* <Stack.Screen name='Test' component={Test} /> */}
//             <Stack.Screen name='HotelPost' component={HotelPost} />
//         </Stack.Navigator>
//     )
// }

// function Account() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='Account' component={AccountScreen} />
//         </Stack.Navigator>
//     )
// }

// function Cart() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='MyCart' component={MyCart} />
//         </Stack.Navigator>
//     )
// }

const MainNavigator = () => {

    // const { isLoggedIn } = useLogin()

    // return (
    //     isLoggedIn ? <Account /> :
    //         <Tab.Navigator
    //             initialRouteName='HomeStackScreen'
    //             screenOptions={{
    //                 headerShown: false,
    //                 tabBarStyle: { backgroundColor: COLORS.blue },
    //                 tabBarInactiveTintColor: COLORS.orange,
    //                 tabBarActiveTintColor: COLORS.red,
    //             }} >

    //             <Tab.Screen name='Home' component={HomeStackScreen}
    //                 options={{
    //                     tabBarIcon: ({ color, size }) => {
    //                         return (
    //                             <Icon name='home' color={color} size={size} />
    //                         )
    //                     }
    //                 }}
    //             />
    //             <Tab.Screen name='Đăng bài' component={PostTab}
    //                 options={{
    //                     tabBarIcon: ({ color, size }) => {
    //                         return (
    //                             <Icon name='post-add' color={color} size={size} />
    //                         )
    //                     }
    //                 }}
    //             />
    //             <Tab.Screen name='Giỏ hàng' component={Cart}
    //                 options={{
    //                     tabBarIcon: ({ color, size }) => {
    //                         return (
    //                             <Icon name='shopping-cart' color={color} size={size} />
    //                         )
    //                     }
    //                 }}
    //             />
    //             <Tab.Screen name='Tôi' component={Account}
    //                 options={{
    //                     tabBarIcon: ({ color, size }) => {
    //                         return (
    //                             <Icon name='account-circle' color={color} size={size} />
    //                         )
    //                     }
    //                 }}
    //             />

    //         </Tab.Navigator>
    // )

    const [token, setToken] = useState(false)

    useEffect(() => {
        const get = () => {
            setToken(useSelector(state => state.user.authToken))
        }
        get()
    }, [])


    return (
        <NavigationContainer>
            {token ? <HomeStackScreen /> : <AuthStack />}
        </NavigationContainer>
    )

}

export default MainNavigator