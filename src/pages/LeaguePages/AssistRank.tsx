import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface PlayerRankPropsType {
  playerData: Array<any> | undefined;
}

function AssistRank({ playerData }: PlayerRankPropsType) {
  const { country } = useParams();

  const [leagueColor, setLeagueColor] = useState("black");

  const [borderStyle, setBorderStyle] = useState(
    "border-r-[1px] border-england-500"
  );

  const [tableBg, setTableBg] = useState("bg-border-england-200");

  useEffect(() => {
    if (country === "england") {
      setLeagueColor("england-500");
      setBorderStyle("border-r-[1px] border-england-500");
      setTableBg("odd:bg-england-200");
    } else if (country === "spain") {
      setLeagueColor("spain-500");
      setBorderStyle("border-r-[1px] border-spain-500");
      setTableBg("odd:bg-spain-200");
    } else if (country === "germany") {
      setLeagueColor("germany-500");
      setBorderStyle("border-r-[1px] border-germany-500");
      setTableBg("odd:bg-germany-200");
    } else if (country === "italy") {
      setLeagueColor("italy-500");
      setBorderStyle("border-r-[1px] border-italy-500");
      setTableBg("odd:bg-italy-200");
    }
  }, []);

  return (
    <div>
      <table
        className={`block border-${leagueColor} border-y-2 text-xs w-screen`}
      >
        {/* table 목차 */}
        <thead>
          <tr>
            <th className={`w-auto h-8 ${borderStyle}`}></th>
            <th className={`w-1/12 sm:w-2/12 ${borderStyle}`}>클럽</th>
            <th className={`w-5/12 sm:w-4/12 ${borderStyle}`}>선수</th>
            <th className={`w-1/12 ${borderStyle}`}>도움</th>
            <th className={`w-2/12 sm:w-2/12 ${borderStyle}`}>패스 시도</th>
            <th className={`w-2/12 sm:w-2/12 ${borderStyle}`}>키 패스</th>
            <th className="w-1/12">출전</th>
          </tr>
        </thead>

        {/* 각 선수 정보 */}
        <tbody className="text-center">
          {playerData?.map((item, index) => (
            <tr
              key={index}
              className={`h-10 border-t-[1px] border-${leagueColor} h-15 ${tableBg}`}
            >
              <td className={borderStyle}>{index + 1}</td>
              <td className={`text-start ${borderStyle}`}>
                <div className="flex items-center justify-center">
                  <img
                    src={item.statistics[0].team.logo}
                    alt="team logo"
                    className="w-[20px] h-[20px] inline-block"
                  />
                </div>
              </td>
              <td className={borderStyle}>
                <div className="flex items-center">
                  <img
                    src={item.player.photo}
                    alt="team logo"
                    className="w-[20px] h-[20px] mr-2 inline-block"
                  />
                  <span>{item.player.name}</span>
                </div>
              </td>
              <td className={borderStyle}>
                {item.statistics[0].goals.assists}
              </td>
              <td className={borderStyle}>{item.statistics[0].passes.total}</td>
              <td className={borderStyle}>{item.statistics[0].passes.key}</td>
              <td>{item.statistics[0].games.appearences}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssistRank;
