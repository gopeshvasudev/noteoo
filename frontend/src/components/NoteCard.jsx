import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import { useLocation } from "react-router-dom";

import useMarkNoteAsFavourite from "../hooks/useMarkNoteAsFavourite";

const NoteCard = ({ data }) => {
  const { title, content, isFavourite } = data;

  const location = useLocation();
  const pathName = location.pathname;

  const { handler: markFavouriteHandler } = useMarkNoteAsFavourite();

  return (
    <div className="p-3 rounded-2xl bg-noteoo-200 w-[235px] h-[280px] flex flex-col gap-3 shadow-md tracking-wide">
      <div className="w-full h-[45px]">
        <h6 className="text-lg line-clamp-2 leading-[1.2] pl-1">{title}</h6>
      </div>

      <div className="w-full h-[160px] bg-noteoo-100 rounded-2xl overflow-hidden p-2">
        <p className="text-zinc-700 line-clamp-[7] text-sm">{content}</p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <span
          title="Favourite"
          onClick={() => markFavouriteHandler(data?._id, pathName)}
          className="p-1 rounded-full bg-noteoo-300 text-xl cursor-pointer"
        >
          {isFavourite ? <TiStarFullOutline /> : <TiStarOutline />}
        </span>

        <span
          title="Options"
          className="p-1 rounded-full text-xl bg-noteoo-300 cursor-pointer"
        >
          <HiDotsHorizontal />
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
