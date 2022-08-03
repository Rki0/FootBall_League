import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../../key";
import { useEffect, useState } from "react";

function LeaguePage() {
  const { country } = useParams();

  const [leagueId, setLeagueId] = useState(39);

  const [leagueData, setLeagueData] = useState<any>();

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
      params: { season: "2021", league: `${leagueId}` },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response[0]);
        setLeagueData(response.data.response[0].league);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <img src={leagueData?.logo} alt="league logo" />

      <p>{leagueData?.country}</p>
      <img src={leagueData?.flag} alt="nation flag" />

      <h1>{leagueData?.name}</h1>

      <h2>순위표</h2>
      <p>
        {leagueData?.season} ~ {Number(leagueData?.season) + 1}
      </p>
    </div>
  );
}

export default LeaguePage;
