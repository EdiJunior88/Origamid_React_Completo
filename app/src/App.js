import React, { useState } from "react";
import Produto from "./Produto";
import "./App.css"

const App = () => {
  const [ativar, setAtivar] = useState(false)

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

export default App;
