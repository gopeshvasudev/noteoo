import { MdEdit } from "react-icons/md";

import Header from "../components/Header";
import NoteCard from "../components/noteCard";
import Sidebar from "../components/Sidebar";
import { FaMicrophone } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Header />

      <div className="w-full h-[90vh] flex">
        <Sidebar />

        <main className="flex-1 p-2 font-[gilroy-light] font-bold text-zinc-800 overflow-hidden">
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="overflow-y-auto w-full h-[100%] flex flex-wrap items-start justify-center gap-5 pb-2">
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
              <NoteCard />
            </div>
{/* 
            <div className="w-full h-[12%] p-1">
              <div className="w-full h-full border-2 border-noteoo-200 rounded-full py-2 px-3 flex items-center gap-3">
                <input
                  type="search"
                  placeholder="Write your note title here...."
                  className="flex-1 min-w-0 h-full outline-none tracking-wide border-r-2 border-noteoo-200"
                />

                <div className="flex items-center gap-2 h-full text-sm">
                  <button className="bg-noteoo-300 h-full px-4 rounded-full shrink-0 flex items-center gap-2 hover:bg-noteoo-400 cursor-pointer">
                    <span className="">
                      <MdEdit />
                    </span>
                    create note
                  </button>

                  <button className="bg-noteoo-300 h-full px-4 rounded-full">
                    <FaMicrophone />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
