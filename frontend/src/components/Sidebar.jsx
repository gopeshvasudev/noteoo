import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { sidebarLinksData } from "../utils/constants";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const isSidebarCollapsed = useSelector(
    (store) => store.app.isSidebarCollapsed
  );

  return (
    <aside
      className={`h-full border-r-2 border-noteoo-200 text-zinc-800 p-2 font-[gilroy-light] font-bold tracking-wider ${
        isSidebarCollapsed ? "w-[60px]" : "w-[200px]"
      }`}
    >
      <nav className="flex flex-col gap-2">
        <Link
          to={"/note/create"}
          className="py-4 bg-noteoo-300 tracking-wider rounded-xl flex items-center gap-2 text-sm duration-300 justify-center mb-5 hover:tracking-widest"
        >
          <span className="text-base">
            <FaPlus />
          </span>
          {!isSidebarCollapsed && "Create note"}
        </Link>

        {sidebarLinksData?.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={`p-3 flex items-center gap-2 text-sm border-b-2 border-noteoo-300 duration-100 hover:border-b-[5px] ${
              isSidebarCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <span className="text-lg">
              <link.icon />
            </span>

            {!isSidebarCollapsed && link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
