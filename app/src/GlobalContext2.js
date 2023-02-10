// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

import React, { createContext, useState } from 'react';

export const GlobalContext2 = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext2.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext2.Provider>
  );
};
