import React, { FC } from "react";
import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";
import DogsSvg from "../Componentes/DogsSvg";

const Cabecalho: FC = () => {
  return (
    <header className={styles.cabecalho}>
      <nav className={`${styles.menu} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <DogsSvg />
        </Link>
        <Link className={styles.login} to='/login'>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Cabecalho;
