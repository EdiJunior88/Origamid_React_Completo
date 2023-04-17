import axios from "axios";
import React, { useState } from "react";

const UserPost: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/api/user",
        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
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
        type='email'
        placeholder='email'
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />

      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
