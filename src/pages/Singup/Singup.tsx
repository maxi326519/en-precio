import { useState } from "react";

import styles from "./Singup.module.css";
import logo from "../../assets/img/logo.png";
import homeWave from "../../assets/svg/home-wave.svg";
import { Link, useNavigate } from "react-router-dom";

interface SingupData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

interface Error {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

const initSingupData = (): SingupData => ({
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
});

const initError = (): Error => ({
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  repeatPassword: "",
});

export default function Singup() {
  const redirect = useNavigate();
  const [error, setError] = useState(initError());
  const [user, setUser] = useState(initSingupData());

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // Set data
    setUser({ ...user, [e.target.name]: e.target.value });

    // Clean errors
    setError({ ...error, [e.target.name]: "" });
  }

  function handleValidations() {
    const error: Error = initError(); // Inputs errors
    let value = true; // If there are no errors it's true, else it's false

    // Name
    if (error.name === "") {
      error.name = "Debes agregar un nombre";
      value = false;
    }

    // Surname
    if (error.surname === "") {
      error.surname = "Debes agregar un apellido";
      value = false;
    }

    // Email
    if (error.email === "") {
      error.email = "Debes agregar un correo";
      value = false;
    } // Add more validations

    // Phone
    if (error.phone === "") {
      error.phone = "Debes agregar un numero de telefono";
      value = false;
    } // Add more validations

    // Password
    if (error.password === "") {
      error.password = "Debes agregar una contraseña";
      value = false;
    } else if (error.repeatPassword === "") {
      error.repeatPassword = "Debes repetir la contraseña";
      value = false;
    } else if (error.repeatPassword === error.password) {
      error.password = "La contraseña no coincide";
      error.repeatPassword = "La contraseña no coincide";
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
      // Singup code
      redirect("/");
    }
  }

  return (
    <div className={styles.sesion}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />
        <div className={styles.container}>
          <h2>Registrarse</h2>

          {/* NAME */}
          <div className="form-floating mb-3">
            <input
              id={error.name ? "floatingInputInvalid" : "user"}
              type="text"
              name="name"
              value={user.name}
              className={`form-control ${!error.name ? "" : "is-invalid"}`}
              placeholder="Nombre"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Nombre</label>
            {!error.name ? null : <small>{error.name}</small>}
          </div>

          {/* SURNAME */}
          <div className="form-floating mb-3">
            <input
              id={error.surname ? "floatingInputInvalid" : "user"}
              type="text"
              name="surname"
              value={user.surname}
              className={`form-control ${!error.surname ? "" : "is-invalid"}`}
              placeholder="Telefono"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Apellido</label>
            {!error.surname ? null : <small>{error.surname}</small>}
          </div>

          {/* PHONE */}
          <div className="form-floating mb-3">
            <input
              id={error.phone ? "floatingInputInvalid" : "user"}
              type="tel"
              name="phone"
              value={user.phone}
              className={`form-control ${!error.phone ? "" : "is-invalid"}`}
              placeholder="Telefono"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Telefono</label>
            {!error.phone ? null : <small>{error.phone}</small>}
          </div>

          {/* EMAIL */}
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              value={user.email}
              className={`form-control ${!error.email ? "" : "is-invalid"}`}
              id={error.email ? "floatingInputInvalid" : "user"}
              placeholder="E-mail"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email</label>
            {!error.email ? null : <small>{error.email}</small>}
          </div>

          {/* PASSWORD */}
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              value={user.password}
              className={`form-control ${!error.password ? "" : "is-invalid"}`}
              id={error.password ? "floatingInputInvalid" : "pass"}
              placeholder="Contraseña"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Contraseña</label>
            {!error.password ? null : <small>{error.password}</small>}
          </div>

          {/* REPEAT PASSWORD */}
          <div className="form-floating mb-3">
            <input
              type="password"
              name="repeatPassword"
              value={user.repeatPassword}
              className={`form-control ${
                !error.repeatPassword ? "" : "is-invalid"
              }`}
              id={error.repeatPassword ? "floatingInputInvalid" : "pass"}
              placeholder="Repetir la contraseña"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Repetir la contraseña</label>
            {!error.repeatPassword ? null : (
              <small>{error.repeatPassword}</small>
            )}
          </div>

          <button className="btn btn-primary" type="submit">
            Registrarse
          </button>
        </div>
        <span className={styles.singupLink}>
          ¿Ya estas registrado? <Link to="/login">Iniciar sesión</Link>
        </span>
      </form>
      <img className={styles.wave} src={homeWave} alt="wave" />
    </div>
  );
}
