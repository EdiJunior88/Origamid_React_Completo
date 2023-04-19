import React, { FC } from "react";
import styles from "./Input.module.css";
import { InterfaceInput } from "../../Interface/Interface";

const Input: FC<InterfaceInput> = ({
  label,
  type,
  name,
  value,
  onChange,
  erro,
  onBlur,
}) => {
  return (
    <div className={styles.empacotador}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className={styles.erro}>{erro}</p>}
    </div>
  );
};

export default Input;
