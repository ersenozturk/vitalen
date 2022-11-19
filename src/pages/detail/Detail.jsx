import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

   const {data} =  useFetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US`
    )
  console.log('DETAY',data)

  return <div className={styles.container}>Detail {id} <br />
  <p>{data?.name}</p>
  </div>;
};

export default Detail;
