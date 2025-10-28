import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Season from "./pages/Season";
import DriverStandings from "./pages/DriverStandings";
import ConstructorStandings from "./pages/ConstructorStandings";
import Circuits from "./pages/Circuits";
import CircuitDetail from "./pages/CircuitDetail";
import History from "./pages/History";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="season" element={<Season />} />
          <Route path="drivers" element={<DriverStandings />} />
          <Route path="constructors" element={<ConstructorStandings />} />
          <Route path="circuits" element={<Circuits />} />
          <Route path="circuit/:slug" element={<CircuitDetail />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
