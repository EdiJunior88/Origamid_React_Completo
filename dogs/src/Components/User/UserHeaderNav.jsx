import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import styles from "./UserHeaderNav.module.css";
import IconFeed from "../SVG/IconFeed";
import IconStatics from "../SVG/IconStatics";
import IconAdd from "../SVG/IconAdd";
import IconExit from "../SVG/IconExit";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}>
        <NavLink to='/conta' end>
          <IconFeed />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <IconStatics />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to='/conta/postar'>
          <IconAdd />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <IconExit />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
