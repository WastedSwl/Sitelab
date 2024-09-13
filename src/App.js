import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Services from './pages/Services'; // Добавьте импорт для новых страниц
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/PreLoader";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className={`App ${load ? "no-scroll" : "scroll"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} /> {/* Добавьте маршрут для новой страницы */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
