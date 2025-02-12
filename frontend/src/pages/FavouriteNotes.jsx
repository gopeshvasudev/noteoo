import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetNotes from "../hooks/useGetNotes";
import NoteCardSkeleton from "../components/NoteCardSkeleton";
import NoteCard from "../components/NoteCard";

const FavouriteNotes = () => {
  const { handler, loading } = useGetNotes();
  const favouriteNotes = useSelector((store) => store.note.favouriteNotes);

  useEffect(() => {
    handler("favourite");
  }, []);
  return (
    <section className="w-full h-full">
      <div className="w-full max-h-full pb-2 flex flex-wrap gap-5 justify-center items-start overflow-y-auto">
        {loading ? (
          [...Array(5)].map((_, index) => <NoteCardSkeleton key={index} />)
        ) : favouriteNotes.length > 0 ? (
          favouriteNotes?.map((note) => <NoteCard key={note._id} data={note} />)
        ) : (
          <h6 className="text-2xl text-center">
            You didn't mark any note as favourite!
          </h6>
        )}
      </div>
    </section>
  );
};

export default FavouriteNotes;
