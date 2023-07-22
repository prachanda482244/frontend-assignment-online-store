import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import { productApi } from "../services/api/productService";
import searchSlice from "../features/searchSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        search: searchSlice,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productApi.middleware])
})