import { useParams } from "react-router-dom";

import useGetSingleNote from "../hooks/useGetSingleNote";
import ViewPageSkeleton from "../components/ViewPageSkeleton";
import { useSelector } from "react-redux";

const ViewNote = () => {
  const singleNote = useSelector((store) => store.note.singleNote);

  const { noteId } = useParams();
  const { loading, error } = useGetSingleNote(noteId);

  return (
    <section className="w-full h-full">
      {loading ? (
        <ViewPageSkeleton />
      ) : error ? (
        <h6 className="text-xl">{error}</h6>
      ) : (
        <div className="w-full h-full overflow-y-auto flex flex-col gap-5 tracking-wide">
          <h6 className="text-xl sm:text-2xl">{singleNote?.title}</h6>

          <p className="text-base sm:text-lg">{singleNote?.content}</p>
        </div>
      )}
    </section>
  );
};

export default ViewNote;
