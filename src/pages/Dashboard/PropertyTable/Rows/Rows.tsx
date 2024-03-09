import { Property } from "../../../../interfaces/Property";

import styles from "./Rows.module.css";

interface Props {
  property: Property;
  onEdit: (property: Property) => void;
  onDelete: (property: Property) => void;
}

export default function Rows({ property, onEdit, onDelete }: Props) {
  return (
    <div key={property.id} className={styles.rows}>
      <span>{property.titulo}</span>
      <span>{property.ubicacion}</span>
      <span></span>
      <span></span>
      <button onClick={() => onEdit(property)}>-</button>
      <button onClick={() => onDelete(property)}>x</button>
    </div>
  );
}
