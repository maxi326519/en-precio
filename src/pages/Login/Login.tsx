import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Login as LoginTS,
  LoginError,
  initLogin,
  initLoginError,
} from "../../interfaces/Sesion";
import useSesion from "../../hooks/useSesion";

import styles from "./Login.module.css";
import logo from "../../assets/img/logo.png";
import homeWave from "../../assets/svg/home-wave.svg";

export default function Login() {
  const redirect = useNavigate();
  const session = useSesion();
  const [error, setError] = useState<LoginError>(initLoginError());
  const [user, setUser] = useState<LoginTS>(initLogin());

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    // Set data
    setUser({ ...user, [e.target.name]: e.target.value });

    // Clean errors
    setError({ ...error, [e.target.name]: "" });
  }

  function handleValidations() {
    const error: LoginError = initLoginError(); // Inputs errors
    let value = true; // If there are no errors it's true, else it's false

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

    // Set error and return the value
    setError(error);
    return value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidations()) {
      session
        .login(user)
        .then(() => redirect("/"))
        .catch((e: Error) => {
          console.log(e);
          if (e.message.includes("user-not-found")) {
            setError({
              ...error,
              email: "No se encontró usuario con ese email",
            });
          }
          if (e.message.includes("auth/wrong-password")) {
            setError({ ...error, password: "La contraseña es incorrecta" });
          }
        });
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
