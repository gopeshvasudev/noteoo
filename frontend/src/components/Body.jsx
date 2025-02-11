import { Outlet, useLocation } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/authenticate";

  return (
    <div className="w-full h-screen font-[gilroy-light] font-bold bg-noteoo-100 text-zinc-800">
      {!isAuthPage && <Header />}

      <div className="w-full h-[90vh] flex">
        {!isAuthPage && <Sidebar />}

        <main className="flex-1 p-2 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
