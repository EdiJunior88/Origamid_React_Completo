import React from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';

const Teste = () => {
  const active = false;

  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <section>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </section>
  );
};

export default App;
