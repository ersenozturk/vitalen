import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Movies from '../../components/movies/Movies'
import TVseries from "../../components/tvSeries/TVseries";
import styles from "./Home.module.css";

const Home = () => {

  return (
    <div className={styles.container}>
      <Menu />
      <Header />
      <Movies/>
      <TVseries/>
    </div>
  );
};

export default Home;
