import { useContext } from "react";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../api";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const email = useForm();
  const username = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' {...username} />
        <Input label='email' type='email' name='email' {...email} />
        <Input label='password' type='password' name='password' {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
