import React, { useState } from "react";
import Input from "./Form/Input";

const App = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  return (
    <form>
      <Input id="nome" label="Nome"  value={nome} setValue={setEmail} required />
      <Input id="email" label="Email" value={email} setValue={setNome} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
