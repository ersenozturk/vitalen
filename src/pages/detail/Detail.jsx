import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  console.log(
    "DETAY SAYFAM",
    useFetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US`
    )
  );

  return <div className={styles.container}>Detail {id}</div>;
};

export default Detail;
