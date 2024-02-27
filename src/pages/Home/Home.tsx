import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Inputs/Input";

import styles from "./Home.module.css";

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="search"
          label="Busca tu propiedad"
          value={search}
          handleChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          {">"}
        </button>
      </form>
    </div>
  );
}
