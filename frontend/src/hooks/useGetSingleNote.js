import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axiosInstance from "../utils/axiosInstance";
import { setNote } from "../store/reducers/note.slice";

const useGetSingleNote = (noteId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();

  const handler = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/note/view/${noteId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res && res.data && res.data.success) {
        return dispatch(setNote(res?.data?.note));
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        setError(
          "Something went wrong while fetching the note details! Please try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      handler();
    }
  }, []);

  return { loading, error };
};

export default useGetSingleNote;
