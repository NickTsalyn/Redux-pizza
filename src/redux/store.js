import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import pizzaReducer from "./pizzaSlice";
import cartReducer from "./cartSlice";


const persistConfig = {
    key: 'cart',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        pizzas: pizzaReducer,
        cart: persistedReducer
    },
    
})


export const persistor = persistStore(store)
// export default store