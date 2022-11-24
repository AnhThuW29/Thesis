import { createSlice } from "@reduxjs/toolkit";

export const UpdateSlice = createSlice({
    name: "post",
    initialState: {
        email: "abc@gmail.com",
        phone: "+8400000002",
    },

    reducer: {
        update: (state, action) => {
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
    },
});

export const { update } = UpdateSlice.actions;
export default UpdateSlice.reducer;
