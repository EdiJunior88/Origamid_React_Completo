import React, { useEffect } from "react";

const Head = (props) => {
  //Criando titulos e alteranndo o meta tags por um componente
  useEffect(() => {
    document.title = "Dogs | " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  }, [props]);

  return <></>;
};

export default Head;
