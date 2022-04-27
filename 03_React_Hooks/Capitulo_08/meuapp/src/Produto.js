import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar} <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default Produto;
