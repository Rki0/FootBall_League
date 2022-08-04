import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";
import LeaguePageHeader from "./LeaguePageHeader";
import DetailMenu from "./DetailMenu";
import PlayerRank from "./PlayerRank";

function PlayerRankPage() {
  const { country } = useParams();

  const [leagueId, setLeagueId] = useState<number>();

  const [leagueData, setLeagueData] = useState<any>();

  const [playerData, setPlayerData] = useState<any>();

  useEffect(() => {
    if (country === "england") {
      setLeagueId(39);
    } else if (country === "spain") {
      setLeagueId(140);
    } else if (country === "germany") {
      setLeagueId(78);
    } else if (country === "italy") {
      setLeagueId(135);
    }

    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: `${leagueId}` },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setLeagueData(response.data?.response[0].league);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/players/topscorers",
      params: { league: "39", season: "2021" },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlayerData(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <LeaguePageHeader leagueData={leagueData} />

      <DetailMenu />

      <nav>
        <ul>
          <li>최다 골</li>
          <li>최다 도움</li>
          <li>최다 퇴장</li>
          <li>최다 경고</li>
        </ul>
      </nav>

      <PlayerRank playerData={playerData} />
    </div>
  );
}

export default PlayerRankPage;
