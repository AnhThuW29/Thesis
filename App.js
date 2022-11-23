import React, { useEffect, useMemo, useReducer } from 'react'
// import { NavigationContainer } from '@react-navigation/native'

import axios from 'axios'
import MainNavigator from './src/navigations/MainNavigator'

import LoginProvider from './src/context/LoginProvider'


function App() {

  const fetchAPI = async () => {
    try {
      const res = await axios.get('http://192.168.88.107:8000/')
      console.log(res.data)
    }
    catch (err) {
      console.log('error: ', err.message)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  // const [state, dispatch] = useReducer(
  //   (prevState, action) => {
  //     switch (action.type) {
  //       case 'RESTORE_TOKEN':
  //         return {
  //           ...prevState,
  //           userToken: action.token,
  //         }
  //       case 'SIGN_IN':
  //         if (action.token) {
  //           AsyncStorage.setItem('userToken', action.token)
  //         }
  //         return {
  //           ...prevState,
  //           isSignOut: false,
  //           userToken: action.token,
  //         };
  //       case 'SIGN_OUT':
  //         AsyncStorage.removeItem('userToken')
  //         return {
  //           isSignOut: true,
  //           userToken: null,
  //         }
  //     }
  //   },
  //   {
  //     isSignOut: false,
  //     userToken: null,
  //   }
  // )

  // useEffect(() => {
  //   const bootstrapAsync = async () => {
  //     let userToken;

  //     try {

  //     } catch (e) {

  //     }
  //     dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  //   };

  //   bootstrapAsync();
  // }, [])

  // const authContext = useMemo(
  //   () => ({
  //     signIn: async (data) => {

  //       dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  //     },
  //     signOut: () => dispatch({ type: 'SIGN_OUT' }),
  //     signUp: async (data) => {

  //       dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
  //     },
  //   }),
  //   []
  // );

  return (
    <LoginProvider>
      <MainNavigator />
    </LoginProvider>
  );
}

export default App;

