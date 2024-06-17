import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";

const CartStore = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
  },
});

export default CartStore;
