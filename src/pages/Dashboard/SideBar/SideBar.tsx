import SideItem from "./SideItem/SideItem";

import styles from "./SideBar.module.css";
import houses from "../../../assets/svg/houses.svg";
import users from "../../../assets/svg/users.svg";

const sideList = [
  {
    label: "Usuarios",
    icon: users,
    path: "/dashboard/usuarios",
  },
  {
    label: "Propiedades",
    icon: houses,
    path: "/dashboard/properties",
  },
];

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      {sideList.map((item, i) => (
        <SideItem
          key={i}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </div>
  );
}
