import Input from "../../../../../components/Inputs/Input";
import TextAreaInput from "../../../../../components/Inputs/TextareaInput";
import Steps from "../../../../../components/Steps/Steps";
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
      <Steps step={4} />
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.flex}>
          <Input
            name="titulo"
            label="Titulo"
            value={property.titulo}
            error={error.titulo}
            onChange={handleChange}
          />
          <TextAreaInput
            name="description"
            label="Descripcion"
            value={property.descripcion}
            error={error.descripcion}
            onChange={handleChange}
          />
          <div className={styles.btnContainer}>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={onBack}
            >
              Volver
            </button>
            <button type="submit" className="btn btn-primary">
              Publicar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
