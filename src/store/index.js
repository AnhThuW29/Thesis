import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers";
import AccountSlice from "./AccountSlice";
import UpdateReducer from "./UpdateSlice";

export default configureStore({
    reducer: {
        user: AuthReducer,
        account: AccountSlice,
        update: UpdateReducer,
    },
});
