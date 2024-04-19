import styles from "./Footer.module.css";
import logo from "../../assets/img/logo-simple.png";
import instagramSvg from "../../assets/svg/redes/instagram.svg";
import facebookSvg from "../../assets/svg/redes/facebook.svg";
import twitterSvg from "../../assets/svg/redes/twitter.svg";
import youtubeSvg from "../../assets/svg/redes/youtube.svg";

interface Props {
  blue?: boolean;
}

export default function Footer({ blue }: Props) {
  return (
    <footer className={`${styles.footer} ${blue ? styles.blue : ""}`}>
      <div className={styles.container}>
        <div className={styles.column}>
          <img className={styles.logo} src={logo} alt="" />
          <span>Términos y Condiciones</span>
          <span>Política y Privacidad</span>
        </div>
        <div className={styles.column}>
          <h4>Buscar</h4>
          <span>Casa</span>
          <span>Terreno</span>
          <span>Departamento</span>
        </div>
        <div className={styles.column}>
          <h4>Contacto</h4>
          <span>+54 9 11 2222 3333</span>
          <span>enprecio@gmail.com</span>
          <span>Formulario</span>
        </div>
        <div className={styles.column}>
          <h4>Redes</h4>
          <a href="www.instagram.com">
            <img className={styles.icon} src={instagramSvg} alt="instagram" />{" "}
            Instagram
          </a>
          <a href="www.facebook.com">
            <img className={styles.icon} src={facebookSvg} alt="facebook" />{" "}
            Facebook
          </a>
          <a href="www.twitter.com">
            <img className={styles.icon} src={twitterSvg} alt="twitter" />{" "}
            Twitter
          </a>
          <a href="www.youtube.com">
            <img className={styles.icon} src={youtubeSvg} alt="youtube" />{" "}
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}
