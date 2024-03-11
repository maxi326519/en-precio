import PropertyTable from "./PropertyTable/PropertyTable";
import SideBar from "./SideBar/SideBar";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideBar />
      <PropertyTable />
    </div>
  );
}
