import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";
import AssistRank from "./AssistRank";
import Top3RankPlayer from "./Top3RankPlayer";

function AssistRankPage() {
  const { country } = useParams();

  const [leagueId, setLeagueId] = useState<string>();

  const [playerData, setPlayerData] = useState<any>();

  const [top3Player, setTop3Player] = useState<any>();

  useEffect(() => {
    if (country === "england") {
      setLeagueId("39");
    } else if (country === "spain") {
      setLeagueId("140");
    } else if (country === "germany") {
      setLeagueId("78");
    } else if (country === "italy") {
      setLeagueId("135");
    }
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/players/topassists",
      params: { league: leagueId, season: "2021" },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlayerData(response.data.response);
        setTop3Player(response.data.response.slice(0, 3));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [leagueId]);

  return playerData ? (
    <div>
      <Top3RankPlayer top3Player={top3Player} />

      <AssistRank playerData={playerData} />
    </div>
  ) : (
    <p>Data Loading...</p>
  );
}

export default AssistRankPage;
