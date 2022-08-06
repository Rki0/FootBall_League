import { useParams } from "react-router-dom";
import { PropsType, options } from "./Interface";
import { useState, useEffect } from "react";
import { API_KEY } from "../../key";
import axios from "axios";

function Standings({ standings, leagueId }: PropsType) {
  const [selected, setSelected] = useState("2022");

  // 컴포넌트의 props로 받아온 가장 최신 standings를 저장해서 사용하다가
  // select의 option에 따라 setState 진행
  const [newStandings, setNewStandings] = useState(standings);

  const otherSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);

    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: e.target.value, league: leagueId },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setNewStandings(response.data?.response[0].league.standings[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

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
      setBorderStyle("border-r-[1px] border-england-500");
      setTableBg("odd:bg-spain-200");
    } else if (country === "germany") {
      setLeagueColor("germany-500");
      setBorderStyle("border-r-[1px] border-england-500");
      setTableBg("odd:bg-germany-200");
    } else if (country === "italy") {
      setLeagueColor("italy-500");
      setBorderStyle("border-r-[1px] border-england-500");
      setTableBg("odd:bg-italy-200");
    }
  }, []);

  return leagueColor ? (
    <div>
      <select value={selected} onChange={otherSeason}>
        {options.map((item, index) => (
          <option key={index} value={item.season}>
            {item.range}
          </option>
        ))}
      </select>

      <table
        className={`block border-${leagueColor} border-y-2 text-xs w-screen`}
      >
        {/* table 목차 */}
        <thead>
          <tr>
            <th className={`w-auto h-8 ${borderStyle}`}></th>
            <th className={`w-5/12 sm:w-4/12 ${borderStyle}`}>클럽</th>
            <th className={`w-2/12 sm:w-1/12 ${borderStyle}`}>경기수</th>
            <th className={`w-1/12 ${borderStyle}`}>승</th>
            <th className={`w-1/12 ${borderStyle}`}>무</th>
            <th className={`w-1/12 ${borderStyle}`}>패</th>
            <th className={`hidden sm:table-cell w-1/12 ${borderStyle}`}>
              득점
            </th>
            <th className={`hidden sm:table-cell w-1/12 ${borderStyle}`}>
              실점
            </th>
            <th className={`w-1/12 ${borderStyle}`}>GD</th>
            <th className="w-1/12">승점</th>
          </tr>
        </thead>

        {/* 각 클럽 정보 */}
        <tbody className="text-center">
          {newStandings.map((item, index) => (
            <tr
              key={index}
              className={`h-10 border-t-[1px] border-${leagueColor} h-15 ${tableBg}`}
            >
              <td className={borderStyle}>{item.rank}</td>
              <td className={`text-start ${borderStyle}`}>
                <div className="flex items-center">
                  <img
                    src={item.team.logo}
                    alt="team logo"
                    className="w-[20px] h-[20px] mr-2 inline-block"
                  />
                  <span>{item.team.name}</span>
                </div>
              </td>
              <td className={borderStyle}>{item.all.played}</td>
              <td className={borderStyle}>{item.all.win}</td>
              <td className={borderStyle}>{item.all.draw}</td>
              <td className={borderStyle}>{item.all.lose}</td>
              <td className={`hidden sm:table-cell ${borderStyle}`}>
                {item.all.goals.for}
              </td>
              <td className={`hidden sm:table-cell ${borderStyle}`}>
                {item.all.goals.against}
              </td>
              <td className={borderStyle}>{item.goalsDiff}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>Data Loading...</p>
  );
}

export default Standings;
