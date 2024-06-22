import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/CartSlice'; // Change import statement

export const store = configureStore({
  reducer: {
    cart: CartReducer, // Change reducer key name
  }
});
