import axios from "axios";
import React from "react";

const PhotoGet = () => {
  const [id, setId] = React.useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://dogsapi.origamid.dev/json/api/photo/${id}`
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
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
