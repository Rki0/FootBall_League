import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import LeaguePage from "./pages/LeaguePage/LeaguePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<LandingPage />} />
          <Route path="/league/:country" element={<LeaguePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
