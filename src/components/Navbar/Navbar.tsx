import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/ReduxState";
import { useEffect, useRef, useState } from "react";

import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo-simple.png";
import userSvg from "../../assets/svg/profile.svg";
import menu from "../../assets/svg/menu.svg";
import companySvg from "../../assets/svg/menu/company.svg";
import dashboardSvg from "../../assets/svg/menu/dashboard.svg";
import logoutSvg from "../../assets/svg/menu/logout.svg";
import profileSvg from "../../assets/svg/menu/profile.svg";

interface Props {
  opaque?: boolean;
}

export default function Navbar({ opaque }: Props) {
  const redirect = useNavigate();
  const [showMenu, setShowMenu] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
        console.log("Click fuera del menu");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function handleShowProfileMenu() {
    setShowProfileMenu(!showProfileMenu);
  }

  function handleCloseSesion() {
    // Logout code
    redirect("/login");
  }

  return (
    <div
      className={`${styles.navbar} ${opaque ? styles.opaque : ""} ${
        showMenu ? styles.showMenu : ""
      }`}
    >
      <div className={styles.container}>
        <header>
          <Link
            to="/"
            className={styles.logo}
            data-aos="fade-down"
            data-aos-duration="400"
          >
            <img src={logo} alt="logo" />
          </Link>
          <img
            className={styles.menuSvg}
            src={menu}
            alt="menu"
            onClick={handleShowMenu}
          />
        </header>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li data-aos="fade-down" data-aos-delay="450" data-aos-duration="400">
            <Link to="/form">Contacto</Link>
          </li>
        </ul>
        {user ? (
          <div
            className={`${styles.profile} ${showMenu && styles.showProfile}`}
            ref={dropdownRef}
          >
            <div className={styles.data} onClick={handleShowProfileMenu}>
              <img src={user.photo || userSvg} alt="user" />
              <span>Maximiliano</span>
            </div>
            <ul
              className={`${styles.profileMenu} ${
                showProfileMenu ? styles.showProfileMenu : ""
              }`}
            >
              <li>
                <Link to="/profile">
                  <img src={profileSvg} alt="profileSvg" />
                  <span>Perfil</span>
                </Link>
              </li>
              <li>
                <Link to="/realState">
                  <img src={companySvg} alt="companySvg" />
                  <span>Inmobiliaria</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <img src={dashboardSvg} alt="dashboardSvg" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li onClick={handleCloseSesion}>
                <img src={logoutSvg} alt="logoutSvg" />
                <span>Cerrar sesión</span>
              </li>
            </ul>
          </div>
        ) : (
          <ul className={`${styles.sesion} ${showMenu && styles.showProfile}`}>
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
            <li>
              <Link to="/signin">Registrarse</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
