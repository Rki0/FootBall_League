import { HeaderPropsType } from "./Interface";
import { useParams } from "react-router-dom";

function LeaguePageHeader({ leagueData }: HeaderPropsType) {
  const { country } = useParams();

  return (
    <div className="flex items-center mb-4">
      <img src={leagueData?.logo} alt="league logo" className="w-[60px] mr-4" />

      <div className={`text-${country}`}>
        <h1 className="font-bold text-xl">{leagueData?.name}</h1>
        <p>{leagueData?.country}</p>
      </div>
    </div>
  );
}

export default LeaguePageHeader;
