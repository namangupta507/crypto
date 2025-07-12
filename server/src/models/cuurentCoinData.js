// models/CurrentCoinData.js
import mongoose from 'mongoose';

const currentCoinDataSchema = new mongoose.Schema({
  coinId: {
    type: String,
    unique: true  // ensures each coin appears only once
  },
  name: {
    type: String,
  },
  symbol: {
    type: String,
  },
  priceUsd: {
    type: Number,
  },
  marketCap: {
    type: Number,
  },
  percentChange24h: {
    type: Number,
  },
},{timestamps:true});

const currentCoinData= mongoose.model('CurrentCoinData', currentCoinDataSchema);

export default currentCoinData;
