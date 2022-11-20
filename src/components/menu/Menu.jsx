import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuLeft}>Logo</div>
      <div className={styles.menuRight}>
        <ul>
            <li><a href="#popTVHead"> Populer TV Series</a></li>
          
            <li><a href="#popMoviesHead">Populer Movies</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
