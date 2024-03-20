import Input from "../../../../../components/Inputs/Input";
import TextAreaInput from "../../../../../components/Inputs/TextareaInput";
import { Property, PropertyError } from "../../../../../interfaces/Property";

import styles from "./Step4.module.css";

interface Props {
  property: Property;
  error: PropertyError;
  onChange: (property: Property, error: PropertyError) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export default function Step4({
  property,
  error,
  onChange,
  onBack,
  onSubmit,
}: Props) {
  // Change property data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    onChange(
      { ...property, [event.target.name]: event.target.value },
      { ...error, [event.target.name]: "" }
    );
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.flex}>
          <Input
            name="date"
            label="Fecha"
            type="date"
            value={property.titulo}
            error={error.titulo}
            onChange={handleChange}
          />
          <TextAreaInput
            name="date"
            label="Fecha"
            value={property.titulo}
            error={error.titulo}
            onChange={handleChange}
          />
          <div className={styles.btnContainer}>
            <button type="submit" className="btn btn-success" onClick={onBack}>
              Volver
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={onSubmit}
            >
              Continuar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
