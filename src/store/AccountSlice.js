import { createSlice } from "@reduxjs/toolkit"

export const AccountSlice = createSlice({
    name: 'Account',
    initialState: {
        fullname: 'User',
        about: 'Tôi là ...',
        email: 'email',
        phone: '+8400000000',
        avtUrl: 
        'https://c8.alamy.com/compfr/2eda5ta/adorable-avatar-de-vache-adorable-animal-de-ferme-dessin-a-la-main-illustration-vectorielle-isolee-2eda5ta.jpg'
    
    },

    reducers: {
        account: (state, action) => {
            state.fullname = action.payload.fullname
            state.about = action.payload.about
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.avtUrl = action.payload.avtUrl
        }
    }
})

export const {account} = AccountSlice.actions
export default AccountSlice.reducer
