import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";
import AssistRank from "./AssistRank";

function AssistRankPage() {
  const { country } = useParams();

  const [leagueId, setLeagueId] = useState<string>();

  const [playerData, setPlayerData] = useState<any>();

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
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [leagueId]);

  return (
    <div>
      <AssistRank playerData={playerData} />
    </div>
  );
}

export default AssistRankPage;
