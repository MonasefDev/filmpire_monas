import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuthentificated: false,
    sessionId: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthentificated = true;
      state.sessionId = localStorage.getItem('session_id');

      localStorage.setItem('accountId', action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;
export const userReducer = authSlice.reducer;
