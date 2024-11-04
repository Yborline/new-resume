import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/widgets/Footer/Footer";
import Header from "./components/widgets/Header/Header";
import { lazy, Suspense } from "react";

const Games = lazy(() => import("@pages/Games/Games"));
const CardGames = lazy(
  () => import("@components/widgets/Games/CardGames/CardGames")
);
const Projects = lazy(() => import("@pages/Projects/Projects"));
const Home = lazy(() => import("@pages/home/Home"));
const CoverLetter = lazy(() => import("@pages/CoverLetter/CoverLetter"));
const Contacts = lazy(() => import("@pages/Contacts/Contacts"));

function App() {
  return (
    <Suspense>
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
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
