/* 
import React, { useMemo, useState } from 'react';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }

  return c;
}

const App = () => {
  const [contar, setContar] = useState(0);

  const t1 = performance.now();
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
 */

import React, { useCallback, useMemo, useState } from 'react';

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("Set1: ", set1);
  console.log("Set2: ", set2);

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
    <>
      <Produto />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
