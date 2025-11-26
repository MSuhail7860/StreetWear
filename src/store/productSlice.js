import { createSlice } from '@reduxjs/toolkit';
import { products as initialProducts } from '../data/products';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: initialProducts,
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push({ ...action.payload, id: Date.now() });
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(p => p.id !== action.payload);
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
