import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginFormulario: FC = () => {
  const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const tratarNomeUsuario = (event: ChangeEvent<HTMLInputElement>) => {
    setNomeUsuario(event.target.value);
  };

  const tratarSenha = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const tratarEnvio = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    try {
      const resposta = await axios.post(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          nomeUsuario,
          senha,
        }
      );
      console.log(resposta);
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={tratarEnvio}>
        <input type='text' value={nomeUsuario} onChange={tratarNomeUsuario} />
        <input type='password' value={senha} onChange={tratarSenha} />
        <button type='submit'>Entrar</button>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
};

export default LoginFormulario;
