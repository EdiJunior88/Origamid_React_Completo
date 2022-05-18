import React, { useState } from 'react';

const App = () => {
  const [select, setSelect] = useState('');

  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id='produtos'>
        <option disabled value=''>
          Selecione
        </option>
        <option value='notebook'>Notebook</option>
        <option value='smartfone'>Smartfone</option>
        <option value='tablet'>Tablet</option>
      </select>
      {select}
    </form>
  );
};

export default App;
