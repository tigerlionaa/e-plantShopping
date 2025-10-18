import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create a Redux store using configureStore
const store = configureStore({
    // Define the root reducer
    reducer: {
        // 'cart' is the name of the slice in the store, managed by cartReducer
        cart: cartReducer,
    },
});

// Export the store to be used in the application's Provider
export default store;