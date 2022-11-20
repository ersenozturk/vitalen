import styles from './Movies.module.css'
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";

const Movies = () => {
  const { data } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US&page=1"
  );

  return (
    <div className={styles.container}>

      {data?.map((eachMovie) => (
        <Card key={eachMovie.id} type="movie" data={eachMovie} cardPosition='down'/>
      ))}
    </div>
  );
};

export default Movies;
