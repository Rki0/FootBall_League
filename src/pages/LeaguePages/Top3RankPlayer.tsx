import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface Top3PropsType {
  top3Player: Array<any>;
}

function Top3RankPlayer({ top3Player }: Top3PropsType) {
  const { country } = useParams();

  const [leagueColor, setLeagueColor] = useState("black");

  const [borderStyle, setBorderStyle] = useState(
    "border-r-[1px] border-england-500"
  );

  useEffect(() => {
    if (country === "england") {
      setLeagueColor("england-500");
      setBorderStyle("border-[1px] border-england-500 rounded");
    } else if (country === "spain") {
      setLeagueColor("spain-500");
      setBorderStyle("border-[1px] border-spain-500 rounded");
    } else if (country === "germany") {
      setLeagueColor("germany-500");
      setBorderStyle("border-[1px] border-germany-500 rounded");
    } else if (country === "italy") {
      setLeagueColor("italy-500");
      setBorderStyle("border-[1px] border-italy-500 rounded");
    }
  }, []);

  return (
    <div>
      <ul className="hidden sm:flex justify-around mb-4">
        {top3Player.map((item, index) => (
          <li
            key={index}
            className={`relative text-${leagueColor} flex flex-col items-center p-2 ${borderStyle}`}
          >
            <span className="absolute top-0 left-2 font-bold">{index + 1}</span>

            <div className="flex flex-col items-center">
              <img
                src={item.player.photo}
                alt="player face"
                className={`w-[150px]`}
              />
              <p className="font-bold">{item.player.name}</p>
            </div>

            <div className="flex justify-around items-center">
              <img
                src={item.statistics[0].team.logo}
                alt="player team"
                className="w-[30px]"
              />
              <p>{item.statistics[0].team.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Top3RankPlayer;
