import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authslice';
import emailReducer from './emailslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    email: emailReducer,
  },
});
