import { Outlet } from "react-router-dom";
import DetailMenu from "./DetailMenu";
import LeagueTitle from "./LeagueTitle";

function LeaguePageHeader() {
  return (
    <div>
      <LeagueTitle />

      <DetailMenu />

      <Outlet />
    </div>
  );
}

export default LeaguePageHeader;
