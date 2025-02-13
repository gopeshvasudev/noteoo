import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <div
        className={`w-full max-h-full pb-2 flex flex-wrap gap-5 justify-center items-start ${
          loading ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >
        {loading ? (
          [...Array(5)].map((_, index) => <NoteCardSkeleton key={index} />)
        ) : favouriteNotes.length > 0 ? (
          favouriteNotes?.map((note) => (
            <Link to={`/note/${note._id}`} key={note._id}>
              <NoteCard data={note} />
            </Link>
          ))
        ) : (
          <h6 className="text-2xl text-center">
            You did not mark any note as favourite!
          </h6>
        )}
      </div>
    </section>
  );
};

export default FavouriteNotes;
