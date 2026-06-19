import { Link, useLocation } from "react-router"
import Bookmark from "../icons/Bookmark"
import FilmStrip from "../icons/FilmStrip"
import Grid from "../icons/Grid"
import Logo from "../icons/Logo"
import Tv from "../icons/Tv"

const Navbar = () => {
  const { pathname } = useLocation()
  const isHomePage = pathname === "/"
  const isBookmarksPage = pathname === "/bookmarks"

  return (
    <nav
      className="
        bg-[#161D2F] rounded-0 sm:rounded-[10px] md:rounded-[20px]
        flex px-4 py-4.5 md:p-6 lg:py-8 lg:px-7  items-center justify-between lg:flex-col lg:h-[85vh] 
      "
    >
      <Logo />

      <div className="flex items-center gap-8 md:gap-10 lg:mt-16 lg:flex-col lg:gap-10">
        <Grid />
        <FilmStrip />
        
        <Link to={"/"} className="cursor-pointer">
          <Tv color={isHomePage ? "white" : "#5A698F"} />
        </Link>

        <Link to={"/bookmarks"} className="cursor-pointer">
          <Bookmark color={isBookmarksPage ? "white" : "#5A698F"} />
        </Link>
      </div>

      <div className="size-6 md:size-8 lg:size-10 rounded-full lg:mt-auto">
        <img
          src="/avatar.jpg"
          alt="user avatar"
          className="h-full w-full rounded-full"
        />
      </div>
    </nav>
  )
}

export default Navbar
