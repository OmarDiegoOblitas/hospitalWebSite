import React from "react";
import styles from "../styles/NavBar.module.css";
const section = [
  {
    id: 1,
    title: "Home",
  },
  { id: 2, title: "Doctor" },
  {
    id: 3,
    title: "Services",
  },
  { id: 4, title: "Review" },
];
const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.main}>
        <span className={styles.title}>Consulted</span>
        <div className={styles.btn}>
          {section.map(({ id, title }) => {
            return (
              <div key={id} className={styles.btn_navbar}>
                <button className={styles.button}>{title}</button>
              </div>
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
