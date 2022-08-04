import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../key";
import { Link } from "react-router-dom";
import { PropsType } from "./Interface";
import { useSelector, useDispatch } from "react-redux";
import { loadBigLeague } from "../../reducer/league_reducer";
import { RootState } from "../../reducer/index";

function ChoiceLeague({ country, pathname }: PropsType) {
  const [test, setTest] = useState<any>();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
      params: { country: `${country}` },
      headers: {
        "X-RapidAPI-Key": `${API_KEY}`,
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTest(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Link
      to={`/league/${pathname}/rank`}
      className="mb-4 rounded border-2 border-sky-300 p-1 bg-sky-200 md:w-[350px] md:h-[45vh] "
    >
      <div className="flex items-center border-b-2 border-sky-300 justify-between mb-1">
        <p className="text-base mr-1">{test?.country.name}</p>
        <img src={test?.country.flag} alt="league nation" className="w-6" />
      </div>

      <div className="flex items-center md:flex-col md:justify-center">
        <img
          src={test?.league.logo}
          alt="league logo"
          className="h-[60px] mr-4 md:h-[300px] md:my-5 md:mr-0 "
        />
        <p className="text-3xl md:mb-2">{test?.league.name}</p>
        <p className="hidden text-xl md:block">
          {test?.seasons.at(-1).start} ~ {test?.seasons.at(-1).end}
        </p>
      </div>
    </Link>
  );
}

export default ChoiceLeague;
