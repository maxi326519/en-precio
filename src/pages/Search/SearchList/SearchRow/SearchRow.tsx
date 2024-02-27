import { useNavigate } from "react-router-dom";

import styles from "./SearchRow.module.css";
import img from "../../../../assets/svg/image.svg";
import favorite from "../../../../assets/svg/favorite.svg";
import measure from "../../../../assets/svg/measure.svg";
import environment from "../../../../assets/svg/plan-of-house.svg";
import bedrooms from "../../../../assets/svg/bedrooms.svg";
import bathrooms from "../../../../assets/svg/bathroom.svg";

interface Props {
  data: {
    id: string;
    favorite: boolean;
  };
  handleToggleFavorite: (id: string) => void;
}

export default function SearchRow({ data, handleToggleFavorite }: Props) {
  const redirect = useNavigate();

  return (
    <div className={styles.row} onClick={() => redirect(`/search/${data.id}`)}>
      <div className={styles.imgContainer}>
        <img src={img} alt="miniatura" />
      </div>
      <div className={styles.header}>
        <span>US$ 200.000</span>
        <button className={styles.contact}>Contactar</button>
        <button
          className={`${styles.favorite} ${
            data.favorite ? styles.save : styles.untraked
          }`}
          onClick={() => handleToggleFavorite(data.id)}
        >
          <img src={favorite} alt="favorite" />
        </button>
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt
        soluta fugit iste, quibusdam aliquam iusto earum. Ipsa, aliquam
        deleniti? Cupiditate et quam necessitatibus ad eveniet quae deleniti
        harum nisi.
      </p>
      <ul className={styles.data}>
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
  );
}
