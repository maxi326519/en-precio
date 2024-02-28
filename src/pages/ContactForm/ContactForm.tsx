import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";

import styles from "./ContactForm.module.css";
import homeWave from "../../assets/svg/home-wave.svg";

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
  const redirect = useNavigate();
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
      error.affair = "Debes agregar una contraseña";
      value = false;
    }

    // Name
    if (error.name === "") {
      error.name = "Debes agregar una contraseña";
      value = false;
    }

    // Messsage
    if (error.message === "") {
      error.message = "Debes agregar una contraseña";
      value = false;
    }

    value = true;

    // Set error and return the value
    // setError(error);
    return value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidations()) {
      // Login code
      redirect("/");
    }
  }

  return (
    <div className={styles.sesion}>
      <Navbar opaque={true} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <h2>Contactanos</h2>

          {/* NAME */}
          <div className="form-floating mb-3">
            <input
              type="text"
              name="name"
              value={contact.name}
              className={`form-control ${!error.name ? "" : "is-invalid"}`}
              id={error.name ? "floatingInputInvalid" : "pass"}
              placeholder="Nombre"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Nombre</label>
            {!error.name ? null : <small>{error.name}</small>}
          </div>

          {/* EMAIL */}
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              value={contact.email}
              className={`form-control ${!error.email ? "" : "is-invalid"}`}
              id={error.email ? "floatingInputInvalid" : "user"}
              placeholder="name"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email</label>
            {!error.email ? null : <small>{error.email}</small>}
          </div>

          {/* AFFAIR */}
          <div className="form-floating mb-3">
            <input
              type="text"
              name="affair"
              value={contact.affair}
              className={`form-control ${!error.affair ? "" : "is-invalid"}`}
              id={error.affair ? "floatingInputInvalid" : "pass"}
              placeholder="Asunto"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Asunto</label>
            {!error.affair ? null : <small>{error.affair}</small>}
          </div>

          {/* MESSAGE */}
          <div className="form-floating mb-3">
            <textarea
              name="message"
              value={contact.message}
              className={`form-control ${!error.message ? "" : "is-invalid"}`}
              id={error.message ? "floatingInputInvalid" : "pass"}
              placeholder="Escribe tu mensaje"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Mensaje</label>
            {!error.message ? null : <small>{error.message}</small>}
          </div>

          <button className="btn btn-primary" type="submit">
            Iniciar sesión
          </button>
        </div>
        <span className={styles.singupLink}>
          ¿No estas registrado? <Link to="/singup">Registrarse</Link>
        </span>
      </form>
      <img className={styles.wave} src={homeWave} alt="wave" />
    </div>
  );
}
