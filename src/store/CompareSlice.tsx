import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product,  } from "../ApiHooks/useGetProduct";

export const CompareSlice = createSlice({
  name: 'compareSlice',
  initialState: 
  {
    compareList: [] as Product[],
  },
  reducers: {
    addCompare: (state, action: PayloadAction<any>) => {
      state.compareList.push(action.payload);
    },
    removeCompare: (state, action: PayloadAction<any>) => {
      state.compareList = state.compareList.filter((item) => item.id !== action.payload.id);
    },
    
  },
});

export const { addCompare, removeCompare } = CompareSlice.actions;