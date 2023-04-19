import React, { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "../Formularios/Input";
import Botao from "../Formularios/Botao";
import useForm from "../../Hooks/useForm";

const LoginFormulario: FC = () => {
  const nomeUsuario = useForm("");
  const senha = useForm("");

  const tratarEnvio = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (nomeUsuario.validacao() && senha.validacao()) {
      try {
        const resposta = await axios.post(
          "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
          {
            username: nomeUsuario.value,
            password: senha.value,
          }
        );
        console.log(resposta);
      } catch (erro) {
        console.log(erro);
      }
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={tratarEnvio}>
        <Input
          label='Usuário'
          type='text'
          name='nomeUsuario'
          {...nomeUsuario}
        />
        <Input label='Senha' type='password' name='senha' {...senha} />
        <Botao disabled={false}>Entrar</Botao>
      </form>
      <Link to='/login/criar'>Cadastro</Link>
    </section>
  );
};

export default LoginFormulario;
