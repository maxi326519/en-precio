import { useState } from "react";

import "./Login.css";

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

    // Set error and return the value
    setError(error);
    return value;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (handleValidations()) {
      // Login code
    }
  }

  return (
    <div className="sesion">
      <form onSubmit={handleSubmit}>
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
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}
