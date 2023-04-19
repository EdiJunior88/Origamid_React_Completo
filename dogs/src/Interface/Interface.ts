import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";

export interface InterfaceInput {
  label: string;
  type: string;
  name: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (evento: ChangeEvent<HTMLInputElement>) => void;
  erro: string | null;
  onBlur: () => boolean;
}

export interface InterfaceBotao {
  children: ReactNode;
  disabled: boolean;
}

export interface InterfaceLoginFormulario {
  nomeUsuario: string;
  senha: string;
}

export interface InterfaceUseForm {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (evento: ChangeEvent<HTMLInputElement>) => void;
  erro: string | null;
  validacao: () => boolean;
  onBlur: () => boolean;
}

export interface InterfaceTipo {
  regex: RegExp;
  mensagem: string;
}
