import { useState } from "react";
import {
  Property,
  initProperty,
  PropertyError,
  initPropertyError,
} from "../../../../interfaces/Property";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step3";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";

import style from "./CashRegisterForm.module.css";

interface Props {
  handleClose: () => void;
  handleSubmit: (data: Property) => void;
  data: Property | null;
}

export default function CashRegisterForm({
  handleClose,
  handleSubmit,
  data,
}: Props) {
  const [step, setStep] = useState<number>(1);
  const [property, setProperty] = useState<Property>(initProperty());
  const [error, setError] = useState<PropertyError>(initPropertyError());

  function handleSetStep(step: number) {
    setStep(step);
  }

  function handlelocalSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setProperty({ ...property, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
  }

  function handleLocalClose() {
    handleClose();
  }

  return (
    <div className={style.background}>
      <button className="btn btn-close" onClick={handleLocalClose}></button>
      <header className={style.close}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </header>
      {step === 1 && (
        <Step1 onNext={() => handleSetStep(2)} handleChange={handleChange} />
      )}
      {step === 2 && (
        <Step2
          onBack={() => handleSetStep(2)}
          onNext={() => handleSetStep(3)}
          handleChange={handleChange}
        />
      )}
      {step === 3 && (
        <Step3
          onBack={() => handleSetStep(3)}
          onNext={() => handleSetStep(4)}
          handleChange={handleChange}
        />
      )}
      {step === 4 && (
        <Step4 onBack={() => handleSetStep(4)} handleChange={handleChange} />
      )}
    </div>
  );
}
