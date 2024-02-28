import Navbar from "../../components/Navbar/Navbar";

import styles from "./AboutUs.module.css";
import homeWave from "../../assets/svg/home-wave.svg";

export default function AboutUs() {
  return (
    <div className={styles.about}>
      <Navbar opaque={true} />
      <div className={styles.content}>
        <h1>Sobre nosotros</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          cum distinctio error deserunt provident. Voluptates dolorem magni
          officia. Corporis aut iure quo pariatur ad earum dolorem, nobis at
          optio necessitatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          cum distinctio error deserunt provident. Voluptates dolorem magni
          officia. Corporis aut iure quo pariatur ad earum dolorem, nobis at
          optio necessitatibus.
        </p>
      </div>
      <img className={styles.wave} src={homeWave} alt="wave" />
    </div>
  );
}
