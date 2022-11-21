
import { useAppContext } from "../../hooks/useAppContext";
import { randomItemFunc } from "../../utils/function";
import Card from "../card/Card";
import styles from "./Header.module.css";
import seats from '../../images/cinemaSeats2.png'

const Header = () => {

  const {
    headerMovieArr,
    headerMovieLoading,
    headerMovieError,
    headerTVArr,
    headerTVLoading,
    headerTVError,
  } = useAppContext()

  const random8UpMovie = randomItemFunc(headerMovieArr);
  const random8UpTV = randomItemFunc(headerTVArr);
  
  return (
    <div className={styles.container}>
      <img className={styles.containerImg} src={seats} alt="" />
      <div className={styles.headerLeft}>
        {headerMovieLoading && (
          <div>
            <img src="/assets/loading.gif" alt="" />
          </div>
        )}
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
        {headerTVArr && <Card data={random8UpTV} type="tv" cardPosition='up'/> }
        {headerTVError && <p>'err'</p>}
      </div>
    </div>
  );
};

export default Header;
