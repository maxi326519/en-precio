import { Property, PropertyError } from "../../../../../interfaces/Property";

import Input from "../../../../../components/Inputs/Input";

import styles from "./Step3.module.css";
import Steps from "../../../../../components/Steps/Steps";

interface Props {
  property: Property;
  error: PropertyError;
  onChange: (property: Property, error: PropertyError) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Step3({
  property,
  error,
  onBack,
  onNext,
  onChange,
}: Props) {
  // Change property data
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    onChange(
      { ...property, [event.target.name]: event.target.value },
      { ...error, [event.target.name]: "" }
    );
  }

  return (
    <div>
      <Steps step={3} />
      <form className={styles.form} onSubmit={onNext}>
        <div className={styles.imgSelector}>
          <div>+</div>
        </div>
        <div className={styles.flex}>
          <h3>Video</h3>
          <Input
            name="videoUrl"
            label="Video"
            value={property.videoUrl}
            error={error.videoUrl}
            onChange={handleChange}
          />
          <h3>Video Url</h3>
          <Input
            name="video360Url"
            label="Video 360"
            value={property.video360Url}
            error={error.video360Url}
            onChange={handleChange}
          />
        </div>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={onBack}
          >
            Volver
          </button>
          <button type="submit" className="btn btn-primary">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
