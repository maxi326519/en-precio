import styles from "./Dashboard.module.css";
import PropertyTable from "./PropertyTable/PropertyTable";
import SideBar from "./SideBar/SideBar";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideBar />
      <PropertyTable />
    </div>
  );
}
