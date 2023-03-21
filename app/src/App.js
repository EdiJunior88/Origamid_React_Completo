import React, { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [ativar, setAtivar] = useState(true);

  return (
    <div>
      {ativar && <Produto titulo='Esses são os produtos' />}
      <button onClick={() => setAtivar(!ativar)}>Toggle</button>
    </div>
  );
};

export default App;
