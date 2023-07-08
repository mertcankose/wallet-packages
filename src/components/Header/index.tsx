import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const headerItems = [
  {
    name: "Wagmi",
    path: "/wagmi",
  },
  {
    name: "ConnectKit",
    path: "/connectkit",
  },
  {
    name: "WalletConnect",
    path: "/walletconnect",
  },
  {
    name: "Dynamic",
    path: "/dynamic",
  },
  {
    name: "RainbowKit",
    path: "/rainbowkit",
  },
];

const Header = () => {
  return (
    <div className={styles.header}>
      {headerItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
