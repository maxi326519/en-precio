import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./Login.module.css";
import logo from "../../assets/img/logo.png";
import homeWave from "../../assets/svg/home-wave.svg";

interface LoginData {
  email: string;
  password: string;
}

interface Error {
  email: string;
  password: string;
}

const initLoginData = (): LoginData => ({
  email: "",
  password: "",
});

const initError = (): Error => ({
  email: "",
  password: "",
});

export default function Login() {
  const redirect = useNavigate();
  const [error, setError] = useState(initError());
  const [user, setUser] = useState(initLoginData());

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // Set data
    setUser({ ...user, [e.target.name]: e.target.value });

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

    // Password
    if (error.password === "") {
      error.password = "Debes agregar una contraseña";
      value = false;
    } // Add more validations

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />
        <div className={styles.container}>
          <h2>Iniciar sesion</h2>

          {/* EMAIL */}
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              value={user.email}
              className={`form-control ${!error.email ? "" : "is-invalid"}`}
              id={error.email ? "floatingInputInvalid" : "user"}
              placeholder="name"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email</label>
            {!error.email ? null : <small>{error.email}</small>}
          </div>

          {/* CONTRASEÑA */}
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
