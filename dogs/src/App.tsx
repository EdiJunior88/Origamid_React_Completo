import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

export default App;
