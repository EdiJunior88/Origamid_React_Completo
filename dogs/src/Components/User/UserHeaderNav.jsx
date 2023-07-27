import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import styles from './UserHeaderNav.module.css';
import IconFeed from '../SVG/IconFeed';
import IconStatics from '../SVG/IconStatics';
import IconAdd from '../SVG/IconAdd';
import IconExit from '../SVG/IconExit';

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate('/login');
  }
  const [mobile, setMobile] = useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <IconFeed />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <IconStatics />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/conta/postar">
        <IconAdd />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={handleLogout}>
        <IconExit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
