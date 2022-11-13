import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}

const filterSlice = createSlice({
    name: 'cart',
    initialState,
    reducer: {
        addProduct(state, action){
            state.items.push = action.payload
        }
    }
})

const cartSlice = () => {
    return (
        <div>

        </div>
    );
};

export default cartSlice;