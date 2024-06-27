import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <div className="twinkling"></div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
