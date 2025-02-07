import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { sidebarLinksData } from "../utils/constants";

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
        {sidebarLinksData?.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`p-3 bg-noteoo-300 rounded-lg flex items-center gap-2 text-sm duration-300 border-2 border-noteoo-300 hover:bg-transparent ${
              isSidebarCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <span className="text-lg">
              <link.icon />
            </span>

            {!isSidebarCollapsed && link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
