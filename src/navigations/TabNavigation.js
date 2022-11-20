import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import HomeScreen from '../views/screens/HomeScreen'
import Post from '../views/screens/post'
import MyCart from '../views/screens/MyCart'
import AccountScreen from '../views/screens/AccountScreen'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: COLORS.blue },
                tabBarInactiveTintColor: COLORS.orange,
                tabBarActiveTintColor: COLORS.red,
            }} >
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='home' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Đăng bài' component={Post}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='post-add' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Giỏ hàng' component={MyCart}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Icon name='shopping-cart' color={color} size={size} />
                        )
                    }
                }}
            />
            <Tab.Screen name='Tôi' component={AccountScreen}
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

export default TabNavigation