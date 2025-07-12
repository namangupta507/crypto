import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/LoginSlice'; 
import coinsListReducer from './slices/coins/GetCoinsListsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer, 
    coinsList:coinsListReducer
  },
});

export default store;
