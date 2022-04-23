import React, { useEffect, useState } from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  );
};

export default App;
