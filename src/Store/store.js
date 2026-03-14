import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Slices/Language";
import loaderReducer from "./Slices/loader";
import wishlistReducer from "./Slices/wishlist";
import productsReducer from "./Slices/products";

export const store = configureStore({
  reducer: {
    sliceLanguage: languageReducer,
    sliceLoader: loaderReducer,
    wishlist: wishlistReducer,
    sliceProducts: productsReducer
  },
});
