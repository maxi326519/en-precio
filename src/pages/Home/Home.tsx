import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../../components/Inputs/Input";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./Home.module.css";
import searchIcon from "../../assets/svg/search.svg";
import homeWave from "../../assets/svg/home-wave.svg";

export default function Home() {
  const redirect = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<{
    type: string;
    minPrice: number;
    maxPrice: number;
    bedRooms: number;
  }>({ type: "1", minPrice: 0, maxPrice: 0, bedRooms: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleChangeFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleChangeType = (value: string) => {
    setFilters({ ...filters, type: value });
  };

  const handleSubmit = () => {
    redirect("/search");
  };

  return (
    <div className={styles.landing}>
      <Navbar opaque={true} />
      <div className={styles.home}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>BUSCA TU PROPIEDAD</h2>
          <div className={styles.filters}>
            <div className={styles.type}>
              <button
                className={`btn btn${
                  filters.type === "1" ? "" : "-outline"
                }-primary`}
                type="button"
                onClick={() => handleChangeType("1")}
              >
                Departamento
              </button>
              <button
                className={`btn btn${
                  filters.type === "2" ? "" : "-outline"
                }-primary`}
                type="button"
                onClick={() => handleChangeType("2")}
              >
                Casa
              </button>
              <button
                className={`btn btn${
                  filters.type === "3" ? "" : "-outline"
                }-primary`}
                type="button"
                onClick={() => handleChangeType("3")}
              >
                Terrenos
              </button>
            </div>
            <div className={styles.searchBar}>
              <Input
                name="search"
                label="Ingresa una ubicacion"
                value={search}
                onChange={handleChange}
              />
              <button className="btn btn-primary" onClick={handleSubmit}>
                <img src={searchIcon} alt="search" />
              </button>
            </div>
            <Input
              name="minPrice"
              label="Precio minimo"
              type="number"
              value={filters.minPrice}
              onChange={handleChangeFilters}
            />
            <Input
              name="maxPrice"
              label="Precio Maximo"
              type="number"
              value={filters.maxPrice}
              onChange={handleChangeFilters}
            />
            <Input
              name="bedRooms"
              label="Habitaciones"
              type="number"
              value={filters.bedRooms}
              onChange={handleChangeFilters}
            />
          </div>
        </form>
      </div>
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <div className={styles.text}>
            <h3>La mejor tasación</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laudantium quidem nostrum accusamus officia facilis velit, ipsam
              beatae aspernatur assumenda quibusdam corrupti iusto
              necessitatibus nesciunt labore rerum ducimus architecto molestiae.
            </p>
            <button className="btn btn-primary">Ver mas</button>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.text}>
            <h3>Datos de valor agregado</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laudantium quidem nostrum accusamus officia facilis velit, ipsam
              beatae aspernatur assumenda quibusdam corrupti iusto
              necessitatibus nesciunt labore rerum ducimus architecto molestiae.
            </p>
            <button className="btn btn-primary">Ver mas</button>
          </div>
        </div>
        <div className={styles.detailItem}>
          <div className={styles.text}>
            <h3>Información del día a día</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laudantium quidem nostrum accusamus officia facilis velit, ipsam
              beatae aspernatur assumenda quibusdam corrupti iusto
              necessitatibus nesciunt labore rerum ducimus architecto molestiae.
            </p>
            <button className="btn btn-primary">Ver mas</button>
          </div>
        </div>
      </div>
      <img className={styles.wave} src={homeWave} alt="wave" />
      <Footer blue={true} />
    </div>
  );
}
