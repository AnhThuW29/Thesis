import { createSlice } from "@reduxjs/toolkit";

export const userState = createSlice({
    name: 'user',
    initialState: {
        authToken: false,
        // userData: {},
        // anyData: [],
    },

    reducers: {
        login: (state, action) => {
            state.authToken = action.payload.authToken
        },
    }
})
export const { login } = userState.actions;
export default userState.reducer;

// const initialState = {
//     authToken: null,
//     userData: {},
//     anyData: [],
// }

// export default (state = initialState, action) => {
//     switch(action.type) {
//         case 'LOGIN':
//             return {
//                 ...state, // copy all previous states
//                 authToken: action.payload,
//             }
//         default:
//             return state
//     }
// }


// import { createSlice } from "@reduxjs/toolkit";

// export const gioHangSlice = createSlice({
//     name: "GioHang",
//     initialState: {
//         khachHangID: "kk",
//         sanPham: [
//             {
//                 IDSanPham: "mm",
//                 soLuong: 1,
//             },
//         ],
//     },

//     reducers: {
//         updateGioHang: (state, action) => {
//             state.khachHangID = action.payload.khachHangID;
//             state.sanPham = action.payload.sanPham;
//         },

//     },
// });

// export const { updateGioHang } = gioHangSlice.actions;
// export default gioHangSlice.reducer;