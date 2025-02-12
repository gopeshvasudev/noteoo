import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import NoteCard from "../components/NoteCard";
import useGetNotes from "../hooks/useGetNotes";

const FavouriteNotes = () => {
  const { handler, loading } = useGetNotes();
  const favouriteNotes = useSelector((store) => store.note.favouriteNotes);

  useEffect(() => {
    handler("favourite");
  }, []);
  return (
    <section className="w-full h-full">
      <div className="w-full max-h-full pb-2 flex flex-wrap gap-5 justify-center items-start overflow-y-auto">
        {favouriteNotes?.map((note) => (
          <NoteCard key={note._id} data={note} />
        ))}
      </div>
    </section>
  );
};

export default FavouriteNotes;
