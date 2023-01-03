import React from "react";

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const random = Math.random();
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "André " + sobrenome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  const estiloP = {
    color: "blue",
    fontSize: "2rem",
  };

  return (
    <>
      {titulo}
      <p>
        {true ? "tetete" : "aaaaaa"} - {10}
        {mostrarNome("Rafael")}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 50}</p>
    </>
  );
};

export default App;
