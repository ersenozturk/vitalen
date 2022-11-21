import styles from "./TVseries.module.css";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import { useAppContext } from "../../hooks/useAppContext";
const TVseries = () => {
  const {
    API_KEY
  } = useAppContext()

  const { data } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );

  return (
    <div className={styles.container}>
      {data?.map((eachTV) => (
        <Card type="tv" key={eachTV.id} data={eachTV} cardPosition='down'/>
      ))}
    </div>
  );
};

export default TVseries;
