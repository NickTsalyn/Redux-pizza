
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart(state, action){
            state.items = [...state.items, action.payload]
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        decreaseProducInCart() {

        },
        clearCart(state, action) {
            state.items = [];
        }
    }
})

export default cartSlice.reducer

export const {addToCart, removeFromCart, decreaseProducInCart, clearCart} = cartSlice.actions