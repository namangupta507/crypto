// cron/fetchHistoryData.js
import cron from 'node-cron';
import axios from 'axios';
import dotenv from 'dotenv'
import historyCoinData from '../models/historyCoinData.js';
dotenv.config();

const GET_COINS_ENDPOINT = process.env.GET_COINS_ENDPOINT;

export const startHistoryCron = () => {
  // Schedule to run every hour at 0th minute
  cron.schedule('0 * * * *', async () => {
    console.log('Running hourly coin history fetch...');

    try { 
      const response = await axios.get(GET_COINS_ENDPOINT, {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
        }
      });

      const coins = response.data;

      for (const coin of coins) {
        const historyRecord = new historyCoinData({
          coinId: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          priceUsd: coin.current_price,
          marketCap: coin.market_cap,
          percentChange24h: coin.price_change_percentage_24h
        });

        await historyRecord.save();
      }

      console.log('Coin history saved successfully');
    } catch (err) {
        console.log(err)
      console.error('Failed to fetch or store coin history:', err.message);
    }
  });
};
