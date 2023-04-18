import React, { FC } from "react";
import styles from "./Botao.module.css";
import { InterfaceBotao } from "../../Interface/Interface";

const Botao: FC<InterfaceBotao> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.botao}>
      {children}
    </button>
  );
};

export default Botao;
