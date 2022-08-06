import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

function LeagueTitle() {
  const { country } = useParams();

  const [leagueColor, setLeagueColor] = useState("black");

  useEffect(() => {
    // URL 파라미터에 따라 리그를 구분 후, 색상을 조정
    if (country === "england") {
      setLeagueColor("text-england-500");
    } else if (country === "spain") {
      setLeagueColor("text-spain-500");
    } else if (country === "germany") {
      setLeagueColor("text-germany-500");
    } else if (country === "italy") {
      setLeagueColor("text-italy-500");
    }
  }, []);

  const leagueData = useSelector(
    (state: RootState) => state.leagueReducer.leagueData
  );

  const upperCountry = country?.replace(/\b[a-z]/, (letter) =>
    letter.toUpperCase()
  );

  const thisLeague = leagueData.filter(
    (value) => value.country.name === upperCountry
  )[0];

  return (
    <header className="flex items-center mb-4">
      <img
        src={thisLeague?.league.logo}
        alt="league logo"
        className="w-[60px] mr-4"
      />

      <div className={leagueColor}>
        <h1 className="font-bold text-xl">{thisLeague?.league.name}</h1>
        <p>{thisLeague?.country.name}</p>
      </div>
    </header>
  );
}

export default LeagueTitle;
