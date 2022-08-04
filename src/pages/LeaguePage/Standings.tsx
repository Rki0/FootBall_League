import { useParams } from "react-router-dom";
import { PropsType, options } from "./Interface";

function Standings({ standings }: PropsType) {
  const { country } = useParams();
  const borderStyle: string = `border-r-[1px] border-${country} `;

  return (
    <div>
      <select>
        {options.map((item, index) => (
          <option key={index} value={item.season}>
            {item.range}
          </option>
        ))}
      </select>

      {/* <table className="block rounded border-spain border-2 text-xs w-full"> */}
      <table className={`block border-${country} border-y-2 text-xs w-full`}>
        {/* table 목차 */}
        <thead>
          <tr>
            <th className={`w-7 ${borderStyle}`}>순위</th>
            <th className={borderStyle}>클럽</th>
            <th className={borderStyle}>경기수</th>
            <th className={borderStyle}>승</th>
            <th className={borderStyle}>무</th>
            <th className={borderStyle}>패</th>
            <th className={borderStyle}>득점</th>
            <th className={borderStyle}>실점</th>
            <th className={borderStyle}>GD</th>
            <th>승점</th>
          </tr>
        </thead>

        {/* 각 클럽 정보 */}
        <tbody className="text-center">
          {standings.map((item, index) => (
            // <tr key={index} className="border-t-[1px] border-england h-15">
            <tr
              key={index}
              className={`border-t-[1px] border-${country} h-15 odd:bg-${country}`}
            >
              <td className={borderStyle}>{item.rank}</td>
              <td className={`flex items-center ${borderStyle}`}>
                <img
                  src={item.team.logo}
                  alt="team logo"
                  className="w-[20px] h-[20px] mr-2"
                />
                <p>{item.team.name}</p>
              </td>
              <td className={borderStyle}>{item.all.played}</td>
              <td className={borderStyle}>{item.all.win}</td>
              <td className={borderStyle}>{item.all.draw}</td>
              <td className={borderStyle}>{item.all.lose}</td>
              <td className={borderStyle}>{item.all.goals.for}</td>
              <td className={borderStyle}>{item.all.goals.against}</td>
              <td className={borderStyle}>{item.goalsDiff}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Standings;
