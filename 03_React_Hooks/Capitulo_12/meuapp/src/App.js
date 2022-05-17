import React, { useEffect } from 'react';

function useNumeroAleatorio() {
  useEffect(() => {
    document.title = Math.random();
  }, []);
}

const App = () => {
  useNumeroAleatorio();
  return <div></div>;
};

export default App;
