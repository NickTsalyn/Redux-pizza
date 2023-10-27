import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    sum: 0,
    counter: 0,
    quantity: 0
  },
  reducers: {
    addToCart(state, action) {
      state.items = [...state.items, action.payload];
      state.sum += action.payload.price;
      state.counter += 1;
      state.quantity += 1
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.items[index];
        state.items.splice(index, 1); 
        state.sum -= removedItem.price;
        state.counter -= 1;
        state.quantity -= 1;
      }
    },
    decreaseProducInCart() {},
    clearCart(state, action) {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, decreaseProducInCart, clearCart } =
  cartSlice.actions;
