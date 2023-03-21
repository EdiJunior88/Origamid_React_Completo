import React, { useReducer } from "react";
import Exemplo from "./Exemplo";

function reducer(state, action) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error("Erro action não existe");
  }

  // if (action === "aumentar") {
  //   return state + 1;
  // }

  // if (action === "diminuir") {
  //   return state - 1;
  // }
  // return new Error("Erro action não existe");
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
      <Exemplo />
    </div>
  );
};

export default App;
