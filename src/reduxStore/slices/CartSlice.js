import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    qty: 0,
    Cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.Cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItem >= 0) {
        state.Cart[existingItem].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        state.Cart.push(temp);
      }
    },
    removeFromCart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
    },

    decreaseQty: (state, action) => {
      const itemQty = state.Cart.findIndex(
        (Cart) => Cart.id === action.payload.id
      );

      if (state.Cart[itemQty].qty > 1) {
        state.Cart[itemQty].qty -= 1;
      } else if (state.Cart[itemQty].qty === 1) {
        state.Cart = state.Cart.filter((Cart) => Cart.id !== action.payload.id);
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQty } = CartSlice.actions;
export default CartSlice.reducer;
