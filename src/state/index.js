import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  isLogin: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const newItem = action.payload.item;
      const existingItem = state.cart.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.cart.push(newItem);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setIsLogin: (state) => {
      state.isLogin = !state.isLogin
    }
  },
});

export const { setItems, addToCart, removeFromCart, increaseCount, decreaseCount, setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer;