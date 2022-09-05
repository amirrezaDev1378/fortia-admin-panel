import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import type {AppState, AppThunk} from '@redux/store'

export interface ProductsState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}

const initialState: ProductsState = {
    value: 0,
    status: 'idle',
}

export const incrementAsync = createAsyncThunk(
    'products/fetchCount',
    async (amount: number) => {
        const response = {
            data: 5
        }
        return response.data
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
    },
})

export const {increment, decrement, incrementByAmount} = productsSlice.actions


export const selectProducts = (state: AppState) => state.products


export default productsSlice.reducer
