import { createSlice } from "@reduxjs/toolkit";
const productSlice=createSlice({
    name:"product",
    initialState:{add:false},
    reducers:{
        addProduct(state) {
            state.add=!state.add
        }
    }
})
export const {addProduct}=productSlice.actions;
export default productSlice.reducer;