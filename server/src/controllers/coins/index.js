import axios from "axios";
import currentCoinData from "../../models/cuurentCoinData.js";

const getCoins = async (req, res) => {
  let coinCache = null;
  let lastFetch = 0;
  const now = Date.now();
  const CACHE_TTL = 60 * 1000;
  try {
    const page = req.query.page || 1;
    const per_page = req.query.per_page || 5;
    const vs_currency = req.query.vs_currency;

    if (coinCache && now - lastFetch < CACHE_TTL) {
      return res.status(200).json({
        message: "coins list fetched successful (from cache)",
        status: true,
        data: coinCache,
      });
    }

    const coinsList = await axios.get(process.env.GET_COINS_ENDPOINT, {
      params: {
        vs_currency,
        per_page,
        page,
      },
    });

    for (const coin of coinsList.data) {
      const updateData = {
        coinId: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        priceUsd: coin.current_price,
        marketCap: coin.market_cap,
        percentChange24h: coin.price_change_percentage_24h,
      };

      await currentCoinData.findOneAndUpdate({ coinId: coin.id }, updateData, {
        upsert: true,
        new: true,
      });
    }

    return res.status(200).send({
      message: "coins list fetched successful",
      status: true,
      data: {
        list: coinsList.data,
        page: page,
        per_page: per_page,
        hasMore: coinsList.data.length === per_page,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: error.message, status: false, error: error });
  }
};

export { getCoins };
