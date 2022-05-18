import React, { useState } from 'react';

const App = () => {
  const [textarea, setTextarea] = useState('');

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows='5'
      />
      {textarea}
    </form>
  );
};

export default App;
