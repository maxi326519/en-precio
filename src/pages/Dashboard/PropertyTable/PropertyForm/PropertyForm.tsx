import { useEffect, useState } from "react";
import {
  Property,
  initProperty,
  PropertyError,
  initPropertyError,
} from "../../../../interfaces/Property";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";

import style from "./PropertyForm.module.css";

interface Props {
  data: Property;
  onClose: () => void;
  onSubmit: (data: Property) => void;
}

export default function PropertyForm({ data, onClose, onSubmit }: Props) {
  const [step, setStep] = useState<number>(1);
  const [property, setProperty] = useState<Property>(initProperty());
  const [error, setError] = useState<PropertyError>(initPropertyError());

  useEffect(() => {
    if (data) setProperty(data);
  }, [data]);

  function handleSetStep(step: number) {
    setStep(step);
  }

  function handleSubmit() {
    onSubmit(property);
  }

  function handleChange(property: Property, error: PropertyError) {
    setProperty(property);
    setError(error);
  }

  return (
    <div className={style.background}>
      <header className={style.close}>
        <button className="btn btn-close" onClick={onClose}></button>
      </header>
      {step === 1 && (
        <Step1
          property={property}
          error={error}
          onCancel={onClose}
          onNext={() => handleSetStep(2)}
          onChange={handleChange}
        />
      )}
      {step === 2 && (
        <Step2
          property={property}
          error={error}
          onBack={() => handleSetStep(1)}
          onNext={() => handleSetStep(3)}
          onChange={handleChange}
        />
      )}
      {step === 3 && (
        <Step3
          property={property}
          error={error}
          onBack={() => handleSetStep(2)}
          onNext={() => handleSetStep(4)}
          onChange={handleChange}
        />
      )}
      {step === 4 && (
        <Step4
          property={property}
          error={error}
          onBack={() => handleSetStep(3)}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
