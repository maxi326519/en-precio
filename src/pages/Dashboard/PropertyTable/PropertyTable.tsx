import { Property, initProperty } from "../../../interfaces/Property";
import { useState } from "react";

import Rows from "./Rows/Rows";

import styles from "./PropertyTable.module.css";
import PropertyForm from "./PropertyForm/PropertyForm";

export default function PropertyTable() {
  const properties: Property[] = [];
  const [edit, setEdit] = useState<Property | null>(null);

  const handleOpenOrClose = (property?: Property) => {
    property ? setEdit(property) : setEdit(null);
  };

  const handleNewProperty = () => {
    handleOpenOrClose(initProperty());
  };

  const handleEdit = (property: Property) => {
    handleOpenOrClose(property);
  };

  const handleDelete = (/* property: Property */) => {
    // Execute hook method delete property
  };

  const handleSubmit = () => {
    // Execute hook method to upload data
  };

  return (
    <div className={styles.table}>
      {edit && (
        <PropertyForm
          data={edit}
          onClose={handleOpenOrClose}
          onSubmit={handleSubmit}
        />
      )}
      <header>
        <button onClick={handleNewProperty}>Nueva propiedad</button>
      </header>
      <div className={`${styles.firstRow} ${styles.rows}`}>
        <span></span>
        <span>Titulo</span>
        <span>Ubicacion</span>
        <span>-</span>
        <span>-</span>
      </div>
      <div className={styles.data}>
        {properties.map((property: Property) => (
          <Rows
            key={property.id}
            property={property}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
