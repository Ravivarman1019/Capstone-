// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import API from '../services/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await API.post('/api/auth/login', credentials);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

export const register = (credentials) => async (dispatch) => {
  try {
    const response = await API.post('/api/auth/register', credentials);
    dispatch(setUser(response.data));
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

export default authSlice.reducer;
