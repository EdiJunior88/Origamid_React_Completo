import React, { useContext } from "react";
import { GlobalContext2 } from "./GlobalContext2";

const Limpar = () => {
  const { limparDados } = useContext(GlobalContext2);
  return <button onClick={limparDados}>Limpar</button>;
};

export default Limpar;
