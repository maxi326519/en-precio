import styles from "./Dashboard.module.css";
import SideBar from "./SideBar/SideBar";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <SideBar />
    </div>
  );
}
