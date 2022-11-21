import styles from './Movies.module.css'
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import { useAppContext } from '../../hooks/useAppContext';

const Movies = () => {

  const {
    API_KEY
  } = useAppContext()


  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
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
