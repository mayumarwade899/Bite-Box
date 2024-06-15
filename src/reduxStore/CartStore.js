import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";


const CartStore = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default CartStore;
