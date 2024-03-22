import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import styles from "./SearchDetails.module.css";
import mapsImg from "../../../assets/img/maps.png";
import exampleImg from "../../../assets/img/tasacion.webp";
import measure from "../../../assets/svg/measure.svg";
import environment from "../../../assets/svg/plan-of-house.svg";
import bedrooms from "../../../assets/svg/bedrooms.svg";
import bathrooms from "../../../assets/svg/bathroom.svg";
import checkSvg from "../../../assets/svg/check.svg";

export default function SearchDetails() {
  return (
    <div className={styles.background}>
      <Navbar opaque={true} />
      <div className={styles.content}>
        <div className={styles.galery}>
          <div className={styles.imgContainer}>
            <img src={exampleImg} alt="exampleImg" />
          </div>
          <div className={styles.imgContainer}>
            <img src={exampleImg} alt="exampleImg" />
          </div>
          <div className={styles.imgContainer}>
            <img src={exampleImg} alt="exampleImg" />
          </div>
          <div className={styles.imgContainer}>
            <img src={exampleImg} alt="exampleImg" />
          </div>
          <div className={styles.imgContainer}>
            <img src={exampleImg} alt="exampleImg" />
          </div>
        </div>
        <hr></hr>
        <div className={styles.details}>
          <div className={styles.maps}>
            <img src={mapsImg} alt="" />
          </div>
          <div className={styles.data}>
            <div className={styles.header}>
              <h2>Titulo</h2>
              <span>$200.000</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              sed illum harum ad, nam temporibus consequuntur eveniet commodi
              exercitationem libero possimus animi. Ratione, possimus
              consequuntur quae totam cumque error tempora?. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Neque itaque expedita quod
              porro laboriosam ipsum ratione. Accusantium veritatis laborum id
              sequi rem, necessitatibus quam rerum, ex, dolor possimus minima
              nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Neque sed illum harum ad, nam temporibus consequuntur eveniet
              commodi exercitationem libero possimus animi. Ratione, possimus
              consequuntur quae totam cumque error tempora?. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Neque itaque expedita quod
              porro laboriosam ipsum ratione. Accusantium veritatis laborum id
            </p>
            <ul className={styles.icons}>
              <li>
                <img src={measure} />
                <span>30 m2</span>
              </li>
              <li>
                <img src={environment} />
                <span>3 amb.</span>
              </li>
              <li>
                <img src={bedrooms} />
                <span>2 dorm.</span>
              </li>
              <li>
                <img src={bathrooms} />
                <span>1 baño</span>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <h2>Caracteristicas</h2>
        <div className={styles.characteristics}>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
          <div>
            <img src={checkSvg} alt="check" />
            <span>Lavarropas</span>
          </div>
        </div>
        <hr></hr>
        <h3>Anunciante</h3>
        <div className={styles.anunciante}>
          <div className={styles.logo}>
            <img />
          </div>
          <h4>Inmobiliaria</h4>
          <button className="btn btn-outline-primary">Contactar</button>
          <button className="btn btn-outline-success">What's App</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
