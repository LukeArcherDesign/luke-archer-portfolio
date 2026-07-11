import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop"; // 1. Imported ScrollToTop
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import HavenFalls from "./pages/HavenFalls";
import TheAfterParty from "./pages/TheAfterParty";
import PowerhouseStudios from "./pages/PowerhouseStudios";
import UxDesign from "./pages/UxDesign";

function App() {
  return (
    <Router>
      <ScrollToTop />{" "}
      {/* 2. Placed inside Router so it can track location changes */}
      <div className="min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/haven-falls" element={<HavenFalls />} />
            <Route path="/projects/after-party" element={<TheAfterParty />} />
            <Route
              path="/projects/powerhouse-studios"
              element={<PowerhouseStudios />}
            />
            <Route path="/ux-design" element={<UxDesign />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
