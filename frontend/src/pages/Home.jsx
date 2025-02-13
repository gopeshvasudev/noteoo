import { useEffect } from "react";
import { useSelector } from "react-redux";

import useGetNotes from "../hooks/useGetNotes";
import NoteCard from "../components/NoteCard";
import NoteCardSkeleton from "../components/NoteCardSkeleton";
import { Link } from "react-router-dom";

const Home = () => {
  const allNotes = useSelector((store) => store.note.allNotes);
  const { handler, loading } = useGetNotes();

  useEffect(() => {
    handler("all");
  }, []);

  return (
    <section className="w-full h-full">
      <div
        className={`w-full max-h-full flex flex-wrap items-start justify-center gap-5 pb-2 ${
          loading ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >
        {loading
          ? [...Array(10)].map((_, index) => <NoteCardSkeleton key={index} />)
          : allNotes.length > 0
          ? allNotes.map((note) => (
              <Link to={`/note/${note._id}`} key={note._id}>
                <NoteCard data={note} />
              </Link>
            ))
          : !loading && (
              <h6 className="text-2xl text-center">
                Your thoughts deserve a home. Create your first note!
              </h6>
            )}
      </div>
    </section>
  );
};

export default Home;
