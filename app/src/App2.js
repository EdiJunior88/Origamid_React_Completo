import React, { useEffect } from "react";

function useNumeroAleatorio() {
  useEffect(() => {
    document.title = Math.random();
  }, []);
}

const App2 = () => {
  useNumeroAleatorio();

  return <div>App2</div>;
};

export default App2;
