import styles from "./Menu.module.css";

const Menu = () => {
  return <div className={styles.container}>
    <div className={styles.menuLeft}>
      Logo
    </div>
    <div className={styles.menuRight}>
      <ul>
        <li>Populer TV Series</li>
        <li>Populer Movies</li>
      </ul>
    </div>
  </div>;
};

export default Menu;
