import React, { useCallback, useState } from "react";

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("Teste");
  };

  const func2 = useCallback(() => {
    console.log("Teste");
  }, []);

  set1.add(func1)
  set2.add(func2)

  console.log("Set 1: ", set1);
  console.log("Set 2: ", set2);

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = useState(0);

  return (
    <div>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;
