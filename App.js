import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Vehicles from "./components/Vehicles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./theme.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Hero />
        <Services />
        <Vehicles />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

