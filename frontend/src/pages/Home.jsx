import { useEffect } from "react";
import NoteCard from "../components/noteCard";
import useGetNotes from "../hooks/useGetNotes";
import { useSelector } from "react-redux";

const Home = () => {
  const { handler, loading } = useGetNotes();
  const allNotes = useSelector((store) => store.note.allNotes);

  useEffect(() => {
    handler("all");
  }, []);

  return (
    <section className="w-full h-full">
      <div className="overflow-y-auto w-full max-h-full flex flex-wrap items-start justify-center gap-5 pb-2">
        {allNotes?.map((note) => (
          <NoteCard key={note._id} data={note} />
        ))}
      </div>
    </section>
  );
};

export default Home;
