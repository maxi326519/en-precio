import Input from "../../../../../components/Inputs/Input";
import { Property, PropertyError } from "../../../../../interfaces/Property";
import styles from "./Step1.module.css";

interface Props {
  property: Property;
  error: PropertyError;
  onChange: (property: Property) => void;
  onNext: () => void;
}

export default function Step1({ property, error, onNext, onChange }: Props) {
  // Change property data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    onChange({ ...property, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onNext}>
        <div className={styles.type}>
          <button>Departamento</button>
          <button>Casa</button>
          <button>Terrenos</button>
        </div>
        <div className={styles.flex}>
          <Input
            name="ubicacion"
            label="Ubicacion"
            value={property.ubicacion}
            error={error.ubicacion}
            handleChange={handleChange}
          />
          <Input
            name="calidad"
            label="Calidad"
            value={property.calidad}
            error={error.calidad}
            handleChange={handleChange}
          />
          <Input
            name="estado"
            label="Estado Propiedad"
            value={property.estado}
            error={error.estado}
            handleChange={handleChange}
          />
          <Input
            name="supCubierta"
            label="Sup cubierta"
            value={property.supCubierta}
            error={error.supCubierta}
            handleChange={handleChange}
          />
          <Input
            name="supDescubierta"
            label="Sup descubierta"
            value={property.supDescubierta}
            error={error.supDescubierta}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-success">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
