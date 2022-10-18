import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './src/views/screens/HomeScreen'
import StartScreen from './src/views/screens/StartScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'
import SignInScreen from './src/views/screens/SignInScreen'
import SignUpScreen from './src/views/screens/SignUpScreen'
import TourScreen from './src/views/screens/TourScreen'
import FavoriteScreen from './src/views/screens/FavoriteScreen'

// import TabNavigator from './src/root/TabNavigator'

const Stack = createNativeStackNavigator()

// const Tab = createBottomTabNavigator()
// function Tabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: { backgroundColor: COLORS.blue },
//         tabBarInactiveTintColor: COLORS.primary,
//         tabBarActiveTintColor: COLORS.orange,
//       }}
//     >
//       <Tab.Screen name="Start" component={StartScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => {
//             <Icon name='help' color={color} size={size} />
//           }
//         }}
//       />
//       <Tab.Screen name="Home" component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => {
//             <Icon name='home' color={color} size={size} />
//           }
//         }}
//       />
//       <Tab.Screen name='Me' component={SignInScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => {
//             <Icon name='person' color={color} size={size} />
//           }}} 
//         />

//     </Tab.Navigator>
//   )
// }


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName='HomeScreen'>
        <Stack.Screen name='StartScreen' component={StartScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='TourScreen' component={TourScreen} />
        <Stack.Screen name='FavoriteScreen' component={FavoriteScreen} />

        {/* <Stack.Screen name='Tabs' component={Tabs} /> */}
        {/* <Stack.Screen name='SignIn' component={SignInScreen} /> */}
        {/* <Stack.Screen name='SignUp' component={SignUpScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

