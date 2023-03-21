import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "remover":
      return state.filter((item) => item !== action.content);
    case "adicionar":
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Exemplo = () => {
  const [state, dispatch] = useReducer(reducer, ["Banana", "Uva"]);

  return (
    <div>
      <button onClick={() => dispatch({ type: "remover", content: "Banana" })}>
        Remover Banana
      </button>
      <button onClick={() => dispatch({ type: "adicionar", content: "Limão" })}>
        Adicionar Limão
      </button>
      {state}
    </div>
  );
};

export default Exemplo;
