import { Link, Outlet } from "react-router-dom";
import { GiSoccerKick } from "react-icons/gi";

function Header() {
  return (
    <div>
      <header className="bg-white w-screen py-1">
        <Link to="/" className="flex justify-center">
          <GiSoccerKick size="30px" />
        </Link>
      </header>

      <Outlet />
    </div>
  );
}

export default Header;
