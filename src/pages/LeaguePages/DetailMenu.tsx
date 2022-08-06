import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetailMenu() {
  const { country } = useParams();

  const [leagueColor, setLeagueColor] = useState("black");
  const [borderColor, setBorderColor] = useState("black");

  useEffect(() => {
    // URL 파라미터에 따라 리그를 구분 후, 색상을 조정
    if (country === "england") {
      setLeagueColor("text-england-500");
      setBorderColor("border-england-500");
    } else if (country === "spain") {
      setLeagueColor("text-spain-500");
      setBorderColor("border-spain-500");
    } else if (country === "germany") {
      setLeagueColor("text-germany-500");
      setBorderColor("border-germany-500");
    } else if (country === "italy") {
      setLeagueColor("text-italy-500");
      setBorderColor("border-italy-500");
    }
  }, []);

  return (
    <nav className={`${leagueColor} font-semibold mb-3`}>
      <ul className="flex justify-around w-screen text-sm">
        <li>
          <NavLink
            to={`/league/${country}/rank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 ${borderColor} p-1` : "p-1"
            }
          >
            순위
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/league/${country}/playerrank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 ${borderColor} p-1` : "p-1"
            }
          >
            득점 순위
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/league/${country}/assistrank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 ${borderColor} p-1` : "p-1"
            }
          >
            도움 순위
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/league/${country}/yellowrank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 ${borderColor} p-1` : "p-1"
            }
          >
            경고 순위
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/league/${country}/redrank`}
            className={({ isActive }) =>
              isActive ? `font-bold border-b-2 ${borderColor} p-1` : "p-1"
            }
          >
            퇴장 순위
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DetailMenu;
