import React from "react";
import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";

const Cabecalho: React.FC = () => {
  return (
    <div className={styles.cabecalho}>
      <nav className="container">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Cabecalho;
