import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { randomItemFunc } from "../../utils/function";
import styles from "./Header.module.css";

const Header = () => {
  const {
    headerMovieArr,
    headerMovieLoading,
    headerMovieError,
    headerTVArr,
    headerTVLoading,
    headerTVError,
  } = useContext(AppContext);

  const random8UpMovie = randomItemFunc(headerMovieArr);
  const random8UpTV = randomItemFunc(headerTVArr);
  
  return (
    <div className={styles.container}>
      <div className={styles.headerLeft}>
        {headerMovieLoading && (
          <div>
            <img src="/assets/loading.gif" alt="" />
          </div>
        )}
        {headerMovieArr && <div>{random8UpMovie?.title}</div>}
        {headerMovieError && <p>'err'</p>}
      </div>

      <div className={styles.headerMiddle}>orta kısm</div>

      <div className={styles.headerRight}>
        {headerTVLoading && (
          <div>
            <img src="/assets/loading.gif" alt="" />
          </div>
        )}
        {headerTVArr && <div>{random8UpTV?.original_name}</div>}
        {headerTVError && <p>'err'</p>}
      </div>
    </div>
  );
};

export default Header;
