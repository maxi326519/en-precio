import {
  Property,
  PropertyError,
  PropertyType,
} from "../../../../../interfaces/Property";

import Input from "../../../../../components/Inputs/Input";

import styles from "./Step1.module.css";
import map from "../../../../../assets/img/maps.png";
import Steps from "../../../../../components/Steps/Steps";

interface Props {
  property: Property;
  error: PropertyError;
  onCancel: () => void;
  onNext: () => void;
  onChange: (property: Property, error: PropertyError) => void;
}

export default function Step1({ property, error, onNext, onChange }: Props) {
  // Change property data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    onChange(
      { ...property, [event.target.name]: event.target.value },
      { ...error, [event.target.name]: "" }
    );
  }

  function handleChangeType(type: PropertyType) {
    onChange({ ...property, tipo: type }, error);
  }

  return (
    <form className={styles.form} onSubmit={onNext}>
      <Steps step={1} />
      <div className={styles.type}>
        <button
          className={property.tipo === "Casa" ? styles.active : ""}
          onClick={() => handleChangeType(PropertyType.CASA)}
          type="button"
        >
          Departamento
        </button>
        <button
          className={property.tipo === "Departamento" ? styles.active : ""}
          onClick={() => handleChangeType(PropertyType.DEPARTAMENTO)}
          type="button"
        >
          Casa
        </button>
        <button
          className={property.tipo === "Terreno" ? styles.active : ""}
          onClick={() => handleChangeType(PropertyType.TERRENO)}
          type="button"
        >
          Terrenos
        </button>
      </div>
      <div className={styles.flex}>
        <Input
          name="ubicacion"
          label="Ubicacion"
          value={property.ubicacion}
          error={error.ubicacion}
          onChange={handleChange}
        />
        <div className={styles.img}>
          <img src={map} alt="img" />
        </div>
        <Input
          name="calidad"
          label="Calidad"
          value={property.calidad}
          error={error.calidad}
          onChange={handleChange}
        />
        <Input
          name="estado"
          label="Estado Propiedad"
          value={property.estado}
          error={error.estado}
          onChange={handleChange}
        />
        <Input
          name="supCubierta"
          label="Sup cubierta"
          value={property.supCubierta}
          error={error.supCubierta}
          onChange={handleChange}
        />
        <Input
          name="supDescubierta"
          label="Sup descubierta"
          value={property.supDescubierta}
          error={error.supDescubierta}
          onChange={handleChange}
        />
        <Input
          name="dormitorios"
          label="Dormitorios"
          value={property.dormitorios}
          error={error.dormitorios}
          onChange={handleChange}
        />
      </div>
      <div className={styles.btnContainer}>
        <button type="submit" className="btn btn-primary">
          Continuar
        </button>
        <button type="submit" className="btn btn-outline-primary">
          Cancelar
        </button>
      </div>
    </form>
  );
}
