import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../feature/categorySlice';
import postReducer from '../feature/postSlice';

export const store = configureStore({
  reducer: {
     posts:postReducer,
     category:categoryReducer
  },
});