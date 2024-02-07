import { createSlice } from '@reduxjs/toolkit';
import { IMockData } from '../screens/home/components/MochData';

interface ISliceState {
  countOrder: IMockData[];
}

const initialState: ISliceState = {
  countOrder: [],
};

const counterSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action): void {
      state.countOrder = [...state.countOrder, action.payload];
    },
    deleteOrder(state, action): void {
      state.countOrder = [...action.payload];
    },
  },
});

export const { addOrder, deleteOrder } = counterSlice.actions;
export default counterSlice.reducer;
