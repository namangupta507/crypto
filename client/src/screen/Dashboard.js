import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CryptoTable from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetCoinsListAPI } from "../redux/actions/coins/GetCoinsListAction";
import {PulseLoader} from 'react-spinners';

const Dashboard = () => {
  console.log("dsvv")
  const dispatch = useDispatch();

  const { response, error, loading } = useSelector((state) => state.coinsList);
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchCoinsList = useCallback(async () => {
    try {
      await dispatch(
        GetCoinsListAPI({ vs_currency: "usd", page: page, per_page: limit })
      );
    } catch (error) {
      console.error("Error fetching coins:", error);
    }
  }, [page, limit]);

  useEffect(() => {
    fetchCoinsList();
  }, [page, limit, fetchCoinsList]);

  useEffect(() => {
    if (response.status === true) {
      setCoins(response.data.list);
    }
  }, [response]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCoinsList();
    }, 1800000);
    return () => clearInterval(interval);
  }, [fetchCoinsList]);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <PulseLoader color="#000000" size={15} />
        </div>
      ) : error ? (
        <div className="text-center mt-4 text-danger">
          <h4>Something went wrong. Please try again later.</h4>
        </div>
      ) : (
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Top 10 Cryptocurrencies</h2>
          <CryptoTable data={coins} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
