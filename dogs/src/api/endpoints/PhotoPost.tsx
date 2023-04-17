import axios from "axios";
import React, { useState } from "react";

const PhotoPost: React.FC = () => {
  const [token, setToken] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);

  async function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    if (img !== null) {
      formData.append("img", img);
      formData.append("nome", nome);
      formData.append("peso", peso);
      formData.append("idade", idade);
    }

    try {
      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/api/photo",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
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
        placeholder='token'
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type='text'
        placeholder='nome'
        value={token}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type='text'
        placeholder='peso'
        value={token}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type='text'
        placeholder='idade'
        value={token}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input
        type='file'
        onChange={({ target }) => {
          if (target.files !== null) {
            setImg(target.files[0]);
          }
        }}
      />
      <button>Enviar</button>
    </form>

    /* eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE2ODE3NjYxNDgsIm5iZiI6MTY4MTc2NjE0OCwiZXhwIjoxNjgxODUyNTQ4LCJkYXRhIjp7InVzZXIiOnsiaWQiOiI1Nzg4In19fQ.C5c1m3qHBU3FkGfqiaAqIC8qjPRWzxSn_YiLEgTd7bo */
  );
};

export default PhotoPost;
