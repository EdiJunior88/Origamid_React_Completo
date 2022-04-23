import React, { useState } from 'react';
import Produto from './Produto';

/*
Os links abaixo puxam dados de um produto em formato JSON
https://ranekapi.origamid.dev/json/api/produto/tablet
https://ranekapi.origamid.dev/json/api/produto/smartphone
https://ranekapi.origamid.dev/json/api/produto/notebook
Crie uma interface com 3 botões, um para cada produto.
Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
Mostre apenas um produto por vez
Mostre a mensagem carregando... enquanto o fetch é realizado

*/

const App = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
