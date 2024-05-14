import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  initSingup,
  initSingupError,
  Singup as SingupTS,
  SingupError,
} from "../../interfaces/Sesion";
import useSesion from "../../hooks/useSesion";

import styles from "./Singup.module.css";
import logo from "../../assets/img/logo.png";
import homeWave from "../../assets/svg/home-wave.svg";
import swal from "sweetalert";

export default function Singup() {
  const redirect = useNavigate();
  const sesion = useSesion();
  const [user, setUser] = useState<SingupTS>(initSingup());
  const [error, setError] = useState<SingupError>(initSingupError());

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setUser({ ...user, [e.target.name]: e.target.value }); // Set data
    setError({ ...error, [e.target.name]: "" }); // Clean errors
  }

  function handleValidations() {
    const error: SingupError = initSingupError(); // Inputs errors
    let value = true; // If there are no errors it's true, else it's false

    // Name
    if (user.name === "") {
      error.name = "Debes agregar un nombre";
      value = false;
    }

    // Surname
    if (user.surName === "") {
      error.surName = "Debes agregar un apellido";
      value = false;
    }

    // Email
    if (user.email === "") {
      error.email = "Debes agregar un correo";
      value = false;
    }

    // Password
    if (user.password === "") {
      error.password = "Debes agregar una contraseña";
      value = false;
    }

    if (user.repeatPassword === "") {
      error.repeatPassword = "Debes repetir la contraseña";
      value = false;
    } else if (user.repeatPassword !== user.password) {
      error.password = "La contraseña no coincide";
      error.repeatPassword = "La contraseña no coincide";
      value = false;
    }

    // Set error and return the value
    setError(error);
    return value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidations()) {
      sesion
        .signup(user)
        .then(() => {
          redirect("/");
        })
        .catch((e: Error) => {
          if (e.message.includes("Password should be at least 6 characters")) {
            setError({
              ...error,
              password: "Debe contener mas de 6 caracteres",
            });
          } else {
            swal("Error", "Error al registrarse", "error");
          }
        });
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
              id={error.surName ? "floatingInputInvalid" : "user"}
              type="text"
              name="surName"
              value={user.surName}
              className={`form-control ${!error.surName ? "" : "is-invalid"}`}
              placeholder="Telefono"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Apellido</label>
            {!error.surName ? null : <small>{error.surName}</small>}
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
