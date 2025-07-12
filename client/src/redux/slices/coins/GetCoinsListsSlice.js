import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  response: [],
  loading: false,
  error: null,
};

const getCoinsListSlice = createSlice({
  name: 'getCoinsList',
  initialState,
  reducers: {
    getCoinsListRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCoinsListRequestSuccess(state, action) {
      state.loading = false;
      state.response = action.payload;
    },
    getCoinsListRequestError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCoinsListRequest,
  getCoinsListRequestSuccess,
  getCoinsListRequestError,
} = getCoinsListSlice.actions;

export default getCoinsListSlice.reducer;
