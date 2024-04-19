import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Inputs/Input";
import Checkbox from "../../components/Inputs/Checkbox";

import styles from "./Tasador.module.css";

export default function Tasador() {
  const [data, setData] = useState({
    tipo: "Casa",
    direccion: "",
    supCubierta: 0,
    supSemiCubierta: 0,
    pileta: false,
    parrilla: false,
    sum: false,
    gimnasio: false,
    email: "",
    telefono: "",
  }); // Definir interfaces

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleType = (tipo: string) => {
    setData({ ...data, tipo: tipo });
  };

  const handleSubmit = () => {
    // Envia datos del formulario
  };

  return (
    <div className={styles.background}>
      <Navbar opaque={true} />
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Tasador</h2>
          <div className={styles.type}>
            <button
              className={data.tipo === "Casa" ? styles.active : ""}
              onClick={() => handleType("Casa")}
              type="button"
            >
              Casa
            </button>
            <button
              className={data.tipo === "Departamento" ? styles.active : ""}
              onClick={() => handleType("Departamento")}
              type="button"
            >
              Departamento
            </button>
            <button
              className={data.tipo === "Terreno" ? styles.active : ""}
              onClick={() => handleType("Terreno")}
              type="button"
            >
              Terrenos
            </button>
          </div>{" "}
          <Input
            name="direccion"
            label="Direccion"
            value={data.direccion}
            onChange={handleChange}
          />
          <div className={styles.sup}>
            <Input
              name="supCubierta"
              label="Superficei cubierta"
              type="number"
              value={data.supCubierta}
              onChange={handleChange}
            />
            <Input
              name="supSemiCubierta"
              label="Superficei semi cubierta"
              type="number"
              value={data.supSemiCubierta}
              onChange={handleChange}
            />
          </div>
          <div className={styles.check}>
            <Checkbox
              name="pileta"
              label="Pileta"
              value={data.pileta}
              handleCheck={handleCheck}
            />
            <Checkbox
              name="parrilla"
              label="Parrilla"
              value={data.parrilla}
              handleCheck={handleCheck}
            />
            <Checkbox
              name="sum"
              label="Sum"
              value={data.sum}
              handleCheck={handleCheck}
            />
            <Checkbox
              name="gimnasio"
              label="Simnasio"
              value={data.gimnasio}
              handleCheck={handleCheck}
            />
          </div>
          <Input
            name="email"
            label="Correo"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            name="telefono"
            label="Telefono"
            value={data.telefono}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit">
            Calcular
          </button>
        </form>
      </div>
      <Footer blue={true} />
    </div>
  );
}
