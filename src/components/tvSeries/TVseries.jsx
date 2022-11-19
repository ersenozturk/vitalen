import styles from "./TVseries.module.css";
import useFetch from '../../hooks/useFetch'
const TVseries = () => {
  const { data } = useFetch('https://api.themoviedb.org/3/tv/popular?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US&page=1');
  console.log("TV", data);
  return (
    <div className={styles.container}>
      {data?.map((each) => {
        return <p>{each.name}</p>;
      })}
      <p>das</p>
    </div>
  );
};

export default TVseries;
