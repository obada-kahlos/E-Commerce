import { configureStore } from "@reduxjs/toolkit";
import product from "./productSlice"
const store = configureStore({ reducer: product  });
export default store;
