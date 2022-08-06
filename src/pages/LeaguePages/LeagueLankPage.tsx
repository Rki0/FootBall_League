import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";
import { useEffect, useState } from "react";
import Standings from "./Standings";

function LeaguePage() {
  const { country } = useParams();

  const [leagueId, setLeagueId] = useState<number>();

  const [standings, setStandings] = useState<any>();

  useEffect(() => {
    // Link의 파라미터에 따라 API에 Request할 값을 변경
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
        setStandings(response.data?.response[0].league.standings[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [leagueId]);

  return standings ? (
    <div>
      <Standings standings={standings} leagueId={leagueId} />
    </div>
  ) : (
    <p>Data Loading...</p>
  );
}

export default LeaguePage;
