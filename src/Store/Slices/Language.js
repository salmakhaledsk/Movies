import { createSlice } from "@reduxjs/toolkit";



 const languageSlice= createSlice({
    name: "language",
    initialState: { language: "ar"},
    reducers: {
        //value ademe w value gdeeda
        changeLanguage:(state, action)=>{
            state.language = action.payload;
        }
    }


})
//bt return object 
export const {changeLanguage}=languageSlice.actions
export default languageSlice.reducer