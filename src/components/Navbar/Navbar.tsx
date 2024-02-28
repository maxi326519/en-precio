import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo.png";
import menu from "../../assets/svg/menu.svg";

interface Props {
  opaque?: boolean;
}

export default function Navbar({ opaque }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div
      className={`${styles.navbar} ${opaque ? styles.opaque : ""} ${
        showMenu ? styles.showMenu : ""
      }`}
    >
      <div className={styles.container}>
        <header>
          <div
            className={styles.logo}
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <img src={logo} alt="logo" />
          </div>
          <img
            className={styles.menuSvg}
            src={menu}
            alt="menu"
            onClick={handleShowMenu}
          />
        </header>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="450" data-aos-duration="400">
            <Link to="/form">Contacto</Link>
          </li>
        </ul>
        <ul className={styles.sesion}>
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
          <li>
            <Link to="/signin">Registrarse</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
