import { MdOutlineMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { setIsSidebarCollapsed } from "../store/reducers/app.slice";

const Header = () => {
  console.log("gg");
  const dispatch = useDispatch();

  const toggleSidebarHandler = () => dispatch(setIsSidebarCollapsed());

  return (
    <header className="w-full h-[10vh] flex items-center justify-between px-5 border-b-2 border-noteoo-200 text-zinc-800">
      <div className="flex items-center gap-5 sm:gap-8">
        <span
          onClick={toggleSidebarHandler}
          className="text-3xl cursor-pointer"
        >
          <MdOutlineMenu />
        </span>

        <h1 className="text-4xl font-[gilroy-bold]">Noteoo</h1>
      </div>

      <div>
        <div className="text-2xl bg-zinc-800 text-noteoo-100 p-2 rounded-full cursor-pointer">
          <FaRegUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
