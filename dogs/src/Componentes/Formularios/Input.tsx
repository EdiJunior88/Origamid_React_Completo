import React, { FC } from "react";
import styles from "./Input.module.css";
import { InterfaceInput } from "../../Interface/Interface";

const Input: FC<InterfaceInput> = ({ label, type, name }) => {
  return (
    <div className={styles.empacotador}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.erro}>Erro</p>
    </div>
  );
};

export default Input;
