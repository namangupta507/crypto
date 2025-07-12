// models/CurrentCoinData.js
import mongoose from 'mongoose';

const historyCoinDataSchema = new mongoose.Schema({
  coinId: {
    type: String,
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

const historyCoinData= mongoose.model('HistoryCoinData', historyCoinDataSchema);

export default historyCoinData;
