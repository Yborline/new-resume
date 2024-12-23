import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.sass";
import "./root.scss";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/Theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
