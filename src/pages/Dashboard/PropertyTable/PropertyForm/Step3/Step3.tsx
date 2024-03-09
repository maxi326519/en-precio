import { Property, PropertyError } from "../../../../../interfaces/Property";

import Input from "../../../../../components/Inputs/Input";

import styles from "./Step3.module.css";

interface Props {
  property: Property;
  error: PropertyError;
  onChange: (property: Property) => void;
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
    onChange({ ...property, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form className={styles.form} onSubmit={onNext}>
        <div className={styles.imgs}></div>
        <div className={styles.flex}>
          <h3>Video</h3>
          <Input
            name="videoUrl"
            label="Video"
            value={property.videoUrl}
            error={error.videoUrl}
            handleChange={handleChange}
          />
          <h3>Video Url</h3>
          <Input
            name="video360Url"
            label="Video 360"
            value={property.video360Url}
            error={error.video360Url}
            handleChange={handleChange}
          />
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className="btn btn-success" onClick={onBack}>
            Volver
          </button>
          <button type="submit" className="btn btn-success" onClick={onNext}>
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}
