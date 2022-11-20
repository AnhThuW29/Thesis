import React, { useEffect } from 'react'
// import { NavigationContainer } from '@react-navigation/native'

import axios from 'axios'
import MainNavigator from './src/navigations/MainNavigator'
import { Provider } from 'react-redux'
import store from './src/store/index'

// import LoginProvider from './src/context/LoginProvider'


function App() {

  const fetchAPI = async () => {
    try {
      const res = await axios.get('http://192.168.31.120:8000/')
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
      <Provider store={store}>
          <MainNavigator />
      </Provider>
  );
}

export default App;

