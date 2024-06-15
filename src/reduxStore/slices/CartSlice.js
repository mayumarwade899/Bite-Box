import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.Cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.Cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;
