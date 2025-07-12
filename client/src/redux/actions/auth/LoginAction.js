import { endpoints } from "../../../services/endpoints";
import { loginRequest, loginRequestError, loginRequestSuccess } from "../../slices/auth/LoginSlice";
import axiosInstance from './../../../api/axiosInstance';

export const LoginAPI = (data) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const res = await axiosInstance({
      method: 'POST',
      url: endpoints.login,
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch(loginRequestSuccess(res.data));
  } catch (error) {
    dispatch(loginRequestError(error.response?.data || 'Login Failed'));
  }
};
