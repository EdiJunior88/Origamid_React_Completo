import React, { useState } from "react";

const App = () => {
  // const [nome, setNome] = useState("");
  // const [email, setEmail] = useState("");

  const [form, setForm] = useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        id='nome'
        type='text'
        name='nome'
        value={form.nome}
        onChange={handleChange}
      />
      {form.nome}

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      
      <button>Enviar</button>
    </form>
  );
};

export default App;
