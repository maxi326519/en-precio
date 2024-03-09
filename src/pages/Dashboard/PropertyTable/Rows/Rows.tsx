import { Property } from "../../../../interfaces/Property";

import styles from "../Table.module.css";

interface Props {
  property: Property;
}

export default function Rows({ property }: Props) {
  return (
    <div key={property.id} className={styles.rows}>
      <span>{property.titulo}</span>
      <span>{property.direccion}</span>
      <span></span>
      <span></span>
    </div>
  );
}
