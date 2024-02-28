import Filters from "../../../components/Filters/Filters";
import Navbar from "../../../components/Navbar/Navbar";
import MapContainer from "./MapContainer/MapContainer";

import styles from "./SearchMaps.module.css";

export default function SearchMaps() {
  return (
    <div className={styles.search}>
      <Navbar opaque={true} />
      <Filters />
      <MapContainer />
    </div>
  );
}
