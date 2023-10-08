import { createSlice } from "@reduxjs/toolkit";

const loadSlice = createSlice({
    name: "load",
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            return action.payload;
        },
    },
});

export const { setLoading } = loadSlice.actions;
export default loadSlice.reducer;
