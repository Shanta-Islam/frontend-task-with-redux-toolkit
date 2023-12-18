import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "../redux/LoginSlice";
import { SignupSlice } from "../redux/SignUpSlice";

const store = configureStore({
    reducer: {
        login: LoginSlice.reducer,
        signup: SignupSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export default store;

