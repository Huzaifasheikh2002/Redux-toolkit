import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from './CartSlice' 
import productSlice from "./ProductSlice.js"
const store = configureStore({
  reducer:{
   cart: cartSlice,
   products:productSlice,
  },
});
export default store;
