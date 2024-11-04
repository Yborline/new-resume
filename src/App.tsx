import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/widgets/Footer/Footer";
import Header from "./components/widgets/Header/Header";
import { lazy, Suspense, useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

const LoadingPage = lazy(() => import("@pages/LoadingPage/LoadingPage"));
const Games = lazy(() => import("@pages/Games/Games"));
const CardGames = lazy(
  () => import("@components/widgets/Games/CardGames/CardGames")
);
const Projects = lazy(() => import("@pages/Projects/Projects"));
const Home = lazy(() => import("@pages/home/Home"));
const CoverLetter = lazy(() => import("@pages/CoverLetter/CoverLetter"));
const Contacts = lazy(() => import("@pages/Contacts/Contacts"));

const imageUrls = [
  "https://i.postimg.cc/hhFD7Nkf/apps-47636-13819498107583324-fb06b53a-4974-4acb-85e6-f6f363f85ab6-edec48d0-ec35-4a1f-8bf5-c455987b4a.png",
  "https://i.postimg.cc/CLpNr4PF/twinkling.png",
  "https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png",
  "https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png",
  "https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png",
  "https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png",
  "https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png",
];

const preloadImages = (urls: string[]): Promise<void> => {
  const promises = urls.map((url) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  });
  return Promise.all(promises).then(() => {
    console.log("All images preloaded");
  });
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-main-container">
      <div className="app-container">
        {loading && <LoadingPage />}
        <div className="twinkling" />
        <Header />
        <Suspense fallback={<Atom color="black" size="large" />}>
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
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
