
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../services/api';

export const fetchEmails = createAsyncThunk('emails/fetchEmails', async () => {
  const response = await API.get('/api/emails');
  return response.data;
});

const emailSlice = createSlice({
  name: 'email',
  initialState: { emails: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.emails = action.payload;
      })
      .addCase(fetchEmails.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default emailSlice.reducer;
