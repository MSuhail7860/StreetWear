import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, selectedSize, selectedColor } = action.payload;
            const existingItem = state.items.find(
                item => item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            const { id, selectedSize, selectedColor } = action.payload;
            state.items = state.items.filter(
                item => !(item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
            );
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        updateQuantity: (state, action) => {
            const { id, selectedSize, selectedColor, quantity } = action.payload;
            const item = state.items.find(
                item => item.id === id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            );
            if (item) {
                item.quantity = quantity;
            }
            state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
