import axios from "axios";
import React, { useState } from "react";

const TokenPost: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      setToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
      <p style={{wordBreak: 'break-all'}}>{token}</p>
    </form>
  );
};

export default TokenPost;
