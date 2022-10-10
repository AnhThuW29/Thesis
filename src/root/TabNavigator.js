import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import COLORS from '../consts/colors'

import HomeScreen from '../views/screens/HomeScreen'
import StartScreen from '../views/screens/StartScreen'
import SignInScreen from '../views/screens/SignInScreen'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.blue },
        tabBarInactiveTintColor: COLORS.primary,
        tabBarActiveTintColor: COLORS.orange,
      }}
    >
      <Tab.Screen name="Start" component={StartScreen}
      />
      <Tab.Screen name="Home" component={HomeScreen}
        
      />
      <Tab.Screen name='Me' component={SignInScreen}
        
      />

    </Tab.Navigator>
  );
};

export default TabNavigator