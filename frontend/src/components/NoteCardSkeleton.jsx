import React from "react";

const NoteCardSkeleton = () => {
  return (
    <div className="rounded-xl w-[235px] h-[280px] bg-noteoo-200 flex flex-col gap-3 p-3">
      <div>
        <div className="w-full h-3 rounded-full bg-white animate-pulse mb-2"></div>
        <div className="w-3/4 h-3 rounded-full bg-white animate-pulse"></div>
      </div>

      <div className="w-full rounded-xl h-[180px] bg-white animate-pulse"></div>

      <div className="w-full flex items-center justify-end gap-2">
        <div className="rounded-full w-7 h-7 bg-white animate-pulse"></div>
        <div className="rounded-full w-7 h-7 bg-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default NoteCardSkeleton;
