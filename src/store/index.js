import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './reducers'
import AccountSlice from './AccountSlice'

export default configureStore({
    reducer: {
        user: AuthReducer,
        account: AccountSlice
    }
})
