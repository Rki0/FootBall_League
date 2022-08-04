import { useEffect, useState } from "react";
import { HeaderPropsType } from "./Interface";
import { useParams } from "react-router-dom";

function LeaguePageHeader({ leagueData }: HeaderPropsType) {
  const { country } = useParams();

  const [leagueColor, setLeagueColor] = useState("black");

  useEffect(() => {
    if (country === "england") {
      setLeagueColor("england");
    } else if (country === "spain") {
      setLeagueColor("spain");
    } else if (country === "germany") {
      setLeagueColor("germany");
    } else if (country === "italy") {
      setLeagueColor("italy");
    }
  }, []);

  return (
    <div className="flex items-center mb-4">
      <img src={leagueData?.logo} alt="league logo" className="w-[60px] mr-4" />

      <div className={`text-${leagueColor}`}>
        <h1 className="font-bold text-xl">{leagueData?.name}</h1>
        <p>{leagueData?.country}</p>
      </div>
    </div>
  );
}

export default LeaguePageHeader;
