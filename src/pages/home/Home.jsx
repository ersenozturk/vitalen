import { useAppContext } from "../../context/AppContext";
import styles from "./Home.module.css";
const Home = () => {
  const { deneme } = useAppContext();
  return (
    <div className={styles.container}>
      Home
      {deneme}
    </div>
  );
};

export default Home;