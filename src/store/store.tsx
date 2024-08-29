import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { CompareSlice } from './CompareSlice';


const reducer = combineReducers({
  compare: CompareSlice.reducer,
})

export const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

