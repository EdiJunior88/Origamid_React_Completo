import React, { useState } from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("Vermelho");
  const [frutas, setFrutas] = useState("");
  const [linguagens, setLinguagens] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos"]}
        value={termos}
        setValue={setTermos}
      />

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
