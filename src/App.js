import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
