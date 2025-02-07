import { Link } from "react-router-dom";
import { FaRegNoteSticky } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isSidebarCollapsed = useSelector(
    (store) => store.app.isSidebarCollapsed
  );

  return (
    <aside
      className={`h-full border-r-2 border-noteoo-200 text-zinc-800 p-2 flex flex-col gap-2 font-[gilroy-light] font-bold tracking-wider ${
        isSidebarCollapsed ? "w-[60px]" : "w-[210px]"
      }`}
    >
      <Link
        to={"#"}
        className="p-3 bg-noteoo-400 text-noteoo-100 rounded-lg flex items-center gap-3 text-sm duration-300 hover:bg-noteoo-500"
      >
        <span className="text-lg">
          <FaRegNoteSticky />
        </span>

        {!isSidebarCollapsed && <h6>All notes</h6>}
      </Link>
    </aside>
  );
};

export default Sidebar;
