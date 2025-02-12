import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";

const NoteCard = ({ data }) => {
  const { title, content, isFavourite } = data;

  return (
    <div className="p-3 rounded-2xl bg-noteoo-200 w-[235px] min-h-[280px] flex flex-col gap-3 shadow-lg tracking-wide">
      <h6 className="text-lg line-clamp-2 leading-[1.2] pl-1">{title}</h6>

      <div className="w-full h-[180px] bg-noteoo-100 rounded-2xl overflow-hidden p-2">
        <p className="text-zinc-700 line-clamp-[8] text-sm">{content}</p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <span className="p-1 rounded-full bg-noteoo-300 text-xl">
          {isFavourite ? <TiStarFullOutline /> : <TiStarOutline />}
        </span>

        <span className="p-1 rounded-full text-xl bg-noteoo-300">
          <HiDotsHorizontal />
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
