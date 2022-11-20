import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { randomItemFunc } from "../../utils/function";
import Card from "../card/Card";
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
        {/* {headerMovieArr && <div>{random8UpMovie?.title}</div>} */}
        {headerMovieArr && <Card data={random8UpMovie} type="movie" cardPosition='up'/>} 
        {headerMovieError && <p>'err'</p>}
      </div>

      <div className={styles.headerMiddle}>
        <p>Welcome to the</p>
        <p>World of TV Series & Movies</p>
      </div>

      <div className={styles.headerRight}>
        {headerTVLoading && (
          <div>
            <img src="/assets/loading.gif" alt="" />
          </div>
        )}
        {/* {headerTVArr && <div>{random8UpTV?.original_name}</div>} */}
        {headerTVArr && <Card data={random8UpTV} type="tv" cardPosition='up'/> }
        {headerTVError && <p>'err'</p>}
      </div>
    </div>
  );
};

export default Header;
