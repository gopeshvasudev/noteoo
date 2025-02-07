import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../utils/axiosInstance";
import { setToken } from "../store/reducers/token.slice";

const useSignupHandler = (reset) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = async (data) => {
    try {
      setLoading(true);

      const res = await axiosInstance.post("/auth/signup", data);

      if (res && res.data && res.data.success) {
        dispatch(setToken(res?.data?.accessToken));
        reset();
        toast.success(res?.data?.message);

        return navigate("/");
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useSignupHandler;
