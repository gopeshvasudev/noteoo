import React, { useState } from "react";
import { toast } from "react-hot-toast";

const useFetchNotes = () => {
  const [loading, setLoading] = useState(false);

  const handler = async () => {
    try {
      setLoading(true);
    } catch (error) {
      if (error && error.response && error.response.data) {
        return toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useFetchNotes;
