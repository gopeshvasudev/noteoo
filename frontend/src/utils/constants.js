import { AiFillHome } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";

const sidebarLinksData = [
  {
    name: "All notes",
    path: "/",
    icon: AiFillHome,
  },
  {
    name: "Favourites",
    path: "/note/favourite",
    icon: TiStarFullOutline,
  },
];

export { sidebarLinksData };
