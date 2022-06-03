import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../feature/auth/authSlice';
import categoryReducer from '../feature/categorySlice';
import postReducer from '../feature/postSlice';

export const store = configureStore({
  reducer: {
     posts:postReducer,
     category:categoryReducer,
     auth:authReducer
  },
});