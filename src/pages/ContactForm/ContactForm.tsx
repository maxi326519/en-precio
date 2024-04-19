import { useState } from "react";

import Input from "../../components/Inputs/Input";
import Navbar from "../../components/Navbar/Navbar";
import TextAreaInput from "../../components/Inputs/TextareaInput";

import styles from "./ContactForm.module.css";
import homeWave from "../../assets/svg/home-wave.svg";
import Footer from "../../components/Footer/Footer";

interface ContactData {
  name: string;
  email: string;
  affair: string;
  message: string;
}

interface Error {
  name: string;
  email: string;
  affair: string;
  message: string;
}

const initContactData = (): ContactData => ({
  name: "",
  email: "",
  affair: "",
  message: "",
});

const initError = (): Error => ({
  name: "",
  email: "",
  affair: "",
  message: "",
});

export default function ContactForm() {
  const [error, setError] = useState(initError());
  const [contact, setContact] = useState(initContactData());

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    // Set data
    setContact({ ...contact, [e.target.name]: e.target.value });

    // Clean errors
    setError({ ...error, [e.target.name]: "" });
  }

  function handleValidations() {
    const error: Error = initError(); // Inputs errors
    let value = true; // If there are no errors it's true, else it's false

    // Email
    if (error.email === "") {
      error.email = "Debes agregar un correo";
      value = false;
    } // Add more validations

    // Affair
    if (error.affair === "") {
      error.affair = "Debes agregar una asunto";
      value = false;
    }

    // Name
    if (error.name === "") {
      error.name = "Debes agregar un nombre";
      value = false;
    }

    // Messsage
    if (error.message === "") {
      error.message = "Debes agregar una mensaje";
      value = false;
    }

    // Set error and return the value
    setError(error);
    return value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidations()) {
      // Send consult
    }
  }

  return (
    <div className={styles.background}>
      <Navbar opaque={true} />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Contactanos</h2>
          <div className={styles.inputs}>
            <Input
              type="text"
              name="name"
              value={contact.name}
              label="Nombre"
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              value={contact.email}
              label="Correo"
              onChange={handleChange}
            />
            <Input
              type="text"
              name="affair"
              label="Asunto"
              value={contact.affair}
              onChange={handleChange}
            />
            <TextAreaInput
              name="message"
              value={contact.message}
              label="Mensaje"
              onChange={handleChange}
            />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <img className={styles.wave} src={homeWave} alt="wave" />
      <Footer blue={true} />
    </div>
  );
}
