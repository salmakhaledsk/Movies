import { createSlice } from "@reduxjs/toolkit";

const loaderSlice= createSlice({
    name: "loader",
    initialState: { loading: false },
    reducers: {
        //value ademe w value gdeeda bsaweehoomm
        changeLoader: (state, action) => {
        state.loading = action.payload;
        },
    },
    });

    export const { changeLoader } = loaderSlice.actions;
    export default loaderSlice.reducer