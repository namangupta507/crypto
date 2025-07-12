import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  response: [],
  loading: false,
  error: null,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // GET reducers
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginRequestSuccess(state, action) {
      state.loading = false;
      state.response = action.payload;
    },
    loginRequestError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loginStateReset(state) {
      state.response = [];
      state.loading = false;
      state.error = null;
    },
  },
});


export const {
  loginRequest,
  loginRequestSuccess,
  loginRequestError,
  loginStateReset
} = LoginSlice.actions;

export default LoginSlice.reducer;