import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosInstance/instance";

// hna na bklem el Api
// create action
// async el function eeli bklem beha
const productsAction = createAsyncThunk("products/get", async () => {
  const res = await instance.get("./products");
  // el action by-return promise and this is the value of the promise
  // promise cases
  // pending
  // fulfilled
  // rejected
  return res.data.results;
});

export const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  extraReducers: (builder) => {
    // addcase bta5od 7agteen el status bta3t el action wel function elli hnfzha
    builder.addCase(productsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;

export { productsAction };
