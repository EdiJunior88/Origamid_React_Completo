import { ChangeEvent, ReactNode } from "react";

export interface InterfaceInput {
  label: string;
  type: string;
  name: string;
  /* onChange: (evento: ChangeEvent<HTMLInputElement>) => void; */
}

export interface InterfaceBotao {
  children: ReactNode;
  disabled: boolean;
}
