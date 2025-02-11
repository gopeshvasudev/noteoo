import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

import axiosInstance from "../utils/axiosInstance";

const useCreateNote = (reset) => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.token.token);

  const handler = async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("/note/create", data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res && res.data && res.data.success) {
        toast.success(res?.data?.message);
        return reset();
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useCreateNote;
