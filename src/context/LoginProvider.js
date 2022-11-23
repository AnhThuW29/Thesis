import React, { createContext, useContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userToken, setUserToken] = useState(false)

    const logout = () => {
        setUserToken(false)
        AsyncStorage.removeItem('userToken')
    }

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext)


export default LoginProvider