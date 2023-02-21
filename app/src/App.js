import React, { useState } from "react";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("Vermelho");
  const [frutas, setFrutas] = useState("Vermelho");

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={["Limão", "Laranja", "Uva"]}
        value={frutas}
        setValue={setFrutas}
      />

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
