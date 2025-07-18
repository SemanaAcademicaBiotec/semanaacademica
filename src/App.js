import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Inscrever from "./components/Inscrever";
import Submeta from "./components/Submeta";
import Ensino from "./components/Papers/Ensino";
import PesquisaGrad from "./components/Papers/PesquisaGrad";
import PesquisaPos from "./components/Papers/PesquisaPos";
import Anais from "./components/Anais";
import Footer from "./components/Footer";
import Certificados from "./components/Certificados";
import FAQ from "./components/FAQ";
import Modelo from "./components/Modelo";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inscrições" element={<Inscrever />} />
            <Route path="/submeta" element={<Submeta />} />
            <Route path="/ensino-extensao" element={<Ensino />} />
            <Route path="/pesquisa-graduacao" element={<PesquisaGrad />} />
            <Route path="/pesquisa-pos-graduacao" element={<PesquisaPos />} />
            <Route path="/anais" element={<Anais />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/modelo" element={<Modelo />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
