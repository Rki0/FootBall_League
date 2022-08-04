import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import LeaguePage from "./pages/LeaguePages/LeaguePage";
import PlayerRankPage from "./pages/LeaguePages/PlayerRankPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage />} />
          <Route path="/league/:country/rank" element={<LeaguePage />} />
          <Route
            path="/league/:country/playerrank"
            element={<PlayerRankPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
