import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [itens, setItens] = React.useState(['Item 1']);

  function handleClick() {
    setContar(contar + 1);
    setItens([...itens, 'item ' + (contar + 1)]);
  }

  return (
    <>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
