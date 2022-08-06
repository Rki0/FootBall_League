import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import LeagueLankPage from "./pages/LeaguePages/LeagueLankPage";
import PlayerRankPage from "./pages/LeaguePages/PlayerRankPage";
import LeaguePageHeader from "./pages/LeaguePages/LeaguePageHeader";
import AssistRankPage from "./pages/LeaguePages/AssistRankPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage />} />

          <Route path="/league/:country" element={<LeaguePageHeader />}>
            <Route path="/league/:country/rank" element={<LeagueLankPage />} />
            <Route
              path="/league/:country/playerrank"
              element={<PlayerRankPage />}
            />
            <Route
              path="/league/:country/assistrank"
              element={<AssistRankPage />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
