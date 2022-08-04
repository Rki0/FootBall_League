import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface PlayerRankPropsType {
  playerData: Array<any> | undefined;
}

function PlayerRank({ playerData }: PlayerRankPropsType) {
  const { country } = useParams();

  console.log(playerData);

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

  const borderStyle: string = `border-r-[1px] border-${leagueColor}`;

  return (
    <div>
      <table
        className={`block border-${leagueColor} border-y-2 text-xs w-screen`}
      >
        {/* table 목차 */}
        <thead>
          <tr>
            <th className={`w-auto h-8 ${borderStyle}`}></th>
            <th className={`w-2/12 sm:w-1/12 ${borderStyle}`}>클럽</th>
            <th className={`w-5/12 sm:w-4/12 ${borderStyle}`}>선수</th>
            <th className={`w-1/12 ${borderStyle}`}>득점</th>
            <th className={`w-1/12 ${borderStyle}`}>슈팅 시도</th>
            <th className={`w-1/12 ${borderStyle}`}>유효 슈팅</th>
            <th className={`w-1/12 ${borderStyle}`}>드리블 성공률</th>
            <th className="w-1/12">경기 수</th>
          </tr>
        </thead>

        {/* 각 선수 정보 */}
        <tbody className="text-center">
          {playerData?.map((item, index) => (
            <tr
              key={index}
              className={`h-10 border-t-[1px] border-${leagueColor} h-15 odd:bg-${leagueColor}`}
            >
              <td className={borderStyle}>{index + 1}</td>
              <td className={`text-start ${borderStyle}`}>
                <div className="flex items-center">
                  <img
                    src={item.statistics[0].team.logo}
                    alt="team logo"
                    className="w-[20px] h-[20px] mr-2 inline-block"
                  />
                </div>
              </td>
              <td className={borderStyle}>
                <img
                  src={item.player.photo}
                  alt="team logo"
                  className="w-[20px] h-[20px] mr-2 inline-block"
                />
                <span>{item.player.name}</span>
              </td>
              <td className={borderStyle}>{item.statistics[0].goals.total}</td>
              <td className={borderStyle}>{item.statistics[0].shots.total}</td>
              <td className={borderStyle}>{item.statistics[0].shots.on}</td>
              <td className={borderStyle}>
                {(
                  (item.statistics[0].dribbles.success /
                    item.statistics[0].dribbles.attempts) *
                  100
                ).toFixed(1)}
              </td>
              <td>{item.statistics[0].games.appearences}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerRank;
