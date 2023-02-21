import React, { useState } from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");

  return (
    <form>
      <Select
        options={["Smartfone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id='nome' label='Nome' value={nome} setValue={setEmail} required />
      <Input id='email' label='Email' value={email} setValue={setNome} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
