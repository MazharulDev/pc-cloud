import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
