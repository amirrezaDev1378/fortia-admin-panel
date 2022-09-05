import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import productsSlice from '@redux/reducers/products/products.slice'

export function makeStore() {
  return configureStore({
    reducer: { products: productsSlice },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
