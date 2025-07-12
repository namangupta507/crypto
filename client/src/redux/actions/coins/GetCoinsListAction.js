import { endpoints } from "../../../services/endpoints";
import {
  getCoinsListRequest,
  getCoinsListRequestError,
  getCoinsListRequestSuccess,
} from "../../slices/coins/GetCoinsListsSlice";
import axiosInstance from "./../../../api/axiosInstance";

export const GetCoinsListAPI = (data) => async (dispatch) => {
  const queryParams = new URLSearchParams({
    vs_currency: data.vs_currency,
    page: data.page,
    per_page: data.per_page,
  }).toString();

  const new_url = `${endpoints.getCoinsList}?${queryParams}`;
  try {
    dispatch(getCoinsListRequest());

    const res = await axiosInstance({
      method: "GET",
      url: new_url,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch(getCoinsListRequestSuccess(res.data));
  } catch (error) {
    dispatch(getCoinsListRequestError(error.response?.data || "Login Failed"));
  }
};
