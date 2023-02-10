import React, { useContext } from "react";
import { GlobalContext2 } from "./GlobalContext2";

const Produto = () => {
  const { dados } = useContext(GlobalContext2);
  if (dados === null) return null;
  return (
    <div>
      Produto:{" "}
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
