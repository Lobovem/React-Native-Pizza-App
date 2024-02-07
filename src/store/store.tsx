import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

export const store = configureStore({
  reducer: {
    orders: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
