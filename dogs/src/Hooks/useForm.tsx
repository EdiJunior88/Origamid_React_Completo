import React, { ChangeEvent, useState } from "react";
import { InterfaceTipo, InterfaceUseForm } from "../Interface/Interface";

const tipos: Record<string, InterfaceTipo> = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    mensagem: "Preencha um email válido",
  },
};

const useForm = (tipo: string): InterfaceUseForm => {
  const [value, setValue] = useState<string>("");
  const [erro, setErro] = useState<string | null>(null);

  const validacao = (valor: string): boolean => {
    if (!tipo) return true;

    if (valor.length === 0) {
      setErro("Preencha um valor");
      return false;
    } else if (tipos[tipo] && !tipos[tipo].regex.test(valor)) {
      setErro(tipos[tipo].mensagem);
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const onChange = (evento: ChangeEvent<HTMLInputElement>): void => {
    if (erro) validacao(evento.target.value);
    setValue(evento.target.value);
  };

  return {
    value,
    setValue,
    onChange,
    erro,
    validacao: () => validacao(value),
    onBlur: () => validacao(value),
  };
};

export default useForm;
