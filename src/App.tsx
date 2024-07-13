import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/widgets/Footer/Footer";
import CoverLetter from "@pages/CoverLetter/CoverLetter";
import Projects from "@pages/Projects/Projects";
import Games from "@pages/Games/Games";
import Home from "@pages/home/Home";
import Header from "./components/widgets/Header/Header";
import CardGames from "@components/widgets/Games/CardGames/CardGames";

function App() {
  return (
    <div className="app-container">
      <div className="twinkling"></div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<CoverLetter />} />
        <Route path="/coverLetter" />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />}>
          <Route path="card_games" element={<CardGames />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
