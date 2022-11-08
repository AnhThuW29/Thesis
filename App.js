import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import axios from 'axios'
import MainNavigator from './src/navigations/MainNavigator'
import LoginProvider from './src/context/LoginProvider'

// const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

// function HomeStackScreen() {
//   return (
//     <Stack.Navigator initialRouteName='StartScreen' screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='StartScreen' component={StartScreen} />
//       <Stack.Screen name='HomeScreen' component={HomeScreen} />
//       <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
//       <Stack.Screen name='TourScreen' component={TourScreen} />
//       <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />
//       <Stack.Screen name='SignInScreen' component={SignInScreen} />
//       <Stack.Screen name='SignUpScreen' component={SignUpScreen} />

//     </Stack.Navigator>
//   )
// }

// function LoginScreen() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='SignInScreen' component={SignInScreen} />
//       <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
//     </Stack.Navigator>
//   )
// }

// function AccountScreen() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='SignIn' component={SignInScreen} />
//     </Stack.Navigator>
//   )
// }

function App() {

  const fetchAPI = async () => {
    try {
      const res = await axios.get('http://192.168.31.119:8000/')
      console.log(res.data)
    }
    catch (err) {
      console.log('error: ', err.message)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <LoginProvider>
      <NavigationContainer>
        {/* <Tab.Navigator
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
        <Tab.Screen name='Tôi' component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon name='account-circle' color={color} size={size} />
              )
            }
          }}
        />

      </Tab.Navigator> */}
        <MainNavigator />
      </NavigationContainer>

    </LoginProvider>
  );
}

export default App;

