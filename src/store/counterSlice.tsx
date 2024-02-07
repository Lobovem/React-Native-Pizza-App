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
    addOrder(state): void {},
    deleteOrder(state): void {},
  },
});

export const { addOrder, deleteOrder } = counterSlice.actions;
export default counterSlice.reducer;
