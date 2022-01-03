import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CareerPage from "./pages/CareerPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import Header from './components/Header';
import AboutMePage from "./pages/AboutMePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/about' element={<AboutMePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
