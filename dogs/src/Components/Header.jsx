import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "./Dogs";
import { UserContext } from "../UserContext.jsx";
import { useContext } from "react";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to='/conta'>
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to='/login'>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
