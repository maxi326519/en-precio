import { Property } from "../../../interfaces/Property";
import Rows from "./Rows/Rows";

import styles from "./Table.module.css";

interface Props {
  properties: Property[];
}

export default function Table({ properties }: Props) {
  

  return (
    <div className={styles.table}>
      <div className={`${styles.firstRow} ${styles.rows}`}>
        <span></span>
        <span>Titulo</span>
        <span>Ubicacion</span>
        <span>-</span>
        <span>-</span>
      </div>
      <div className={styles.data}>
        {properties.map((property: Property) => (
          <Rows key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
