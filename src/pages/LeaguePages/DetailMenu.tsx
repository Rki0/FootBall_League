import { NavLink, useParams } from "react-router-dom";

function DetailMenu() {
  const { country } = useParams();

  return (
    <nav className={`text-${country} font-semibold mb-3`}>
      <ul className="flex justify-around w-screen">
        <li>
          <NavLink
            to={`/league/${country}/rank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 border-${country} p-2` : "p-2"
            }
          >
            순위
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/league/${country}/playerrank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 border-${country} p-2` : "p-2"
            }
          >
            개인 순위
          </NavLink>
        </li>
        <li>
          <NavLink to={`/league/${country}/playerrank`}>test</NavLink>
        </li>
        <li>
          <NavLink to={`/league/${country}/playerrank`}>test</NavLink>
        </li>
        <li>
          <NavLink to={`/league/${country}/playerrank`}>test</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DetailMenu;
