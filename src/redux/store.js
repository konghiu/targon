import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/userSlice";
import loadSlice from "../reducers/loadSlice";

export default configureStore({
    reducer: {
        userSlice: userSlice,
        loadSlice: loadSlice,
    },
});
