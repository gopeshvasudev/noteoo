import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/reducers/token.slice";

const useRefreshTokenHandler = (intervalSeconds) => {
  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = async () => {
    try {
      const res = await axiosInstance.post("/auth/refresh-token", {});

      if (res && res.data && res.data.success) {
        return dispatch(setToken(res?.data?.accessToken));
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
        return navigate("/authenticate");
      }
    }
  };

  useEffect(() => {
    if (!token) {
      handler();
    }

    const tokenInterval = setInterval(() => {
      handler();
    }, intervalSeconds);

    return () => {
      clearInterval(tokenInterval);
    };
  }, [token, intervalSeconds]);

  return null;
};

export default useRefreshTokenHandler;
