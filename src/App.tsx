import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js";
import Header from "./components/shared/Header/Header";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer/Footer";
import CoverLetter from "./pages/CoverLetter/CoverLetter";
import Projects from "./pages/Projects/Projects";

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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
