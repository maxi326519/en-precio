import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Inputs/Input";

import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const redirect = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    redirect("/search");
  };

  return (
    <div className={styles.home}>
      <Navbar opaque={true} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>BUSCA TU PROPIEDAD</h2>
        <div className={styles.searchBar}>
          <Input
            name="search"
            label="Ingresa una ubicacion"
            value={search}
            handleChange={handleChange}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            {">"}
          </button>
        </div>
      </form>
    </div>
  );
}
