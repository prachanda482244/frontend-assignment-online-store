import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

export const productSlice = createSlice({
    name: "productSlice",
    initialState: initialStateValue,
    reducers: {
        addProduct: (state, action) => {
            // state.push(action.payload)
            return [...state, action.payload]
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer