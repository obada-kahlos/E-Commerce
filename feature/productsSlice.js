import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    count: 0,
    searchTerm: "",
    counter: 0,
    openAside:false
  },
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    setCounter(state, action) {
      state.counter = action.payload;
    },
    initializeCount(state) {
      const myArray = JSON.parse(localStorage.getItem("myArray")) || [];
      state.count = myArray.length;
    },
    initializeCounter(state) {
      const wishList = JSON.parse(localStorage.getItem("wishList")) || [];
      state.counter = wishList.length;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setOpenAside(state) {
      state.openAside=!state.openAside
    },
  },
});

export const { setCount, initializeCount, setSearchTerm, initializeCounter,setCounter,setOpenAside } =
  productsSlice.actions;
export default productsSlice.reducer;
