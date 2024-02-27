import { useState } from "react";

import styles from "./SearchList.module.css";

import Filters from "../../../components/Filters/Filters";
import Pagination from "../../../components/Pagination/Pagination";
import SearchRow from "./SearchRow/SearchRow";
import Navbar from "../../../components/Navbar/Navbar";

export default function SearchList() {
  const [data, setData] = useState([
    {
      id: "1",
      favorite: true,
    },
    {
      id: "2",
      favorite: false,
    },
    {
      id: "3",
      favorite: false,
    },
    {
      id: "4",
      favorite: false,
    },
  ]);

  const handleToggleFavorite = (id: string) => {
    setData(
      data.map((data) =>
        data.id === id ? { ...data, favorite: !data.favorite } : data
      )
    );
  };

  return (
    <div className={styles.search}>
      <Navbar opaque={true} />
      <Filters />
      <div className={styles.list}>
        {data.map((data) => (
          <SearchRow data={data} handleToggleFavorite={handleToggleFavorite} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
