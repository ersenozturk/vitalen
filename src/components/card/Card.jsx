import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data = [], type = "", cardPosition = "" }) => {
  const navigate = useNavigate();

  const { id, vote_average, poster_path, name, original_name, title } = data;

  return (
    <div className={styles.card} onClick={() => navigate(`/detail/${id}`)}>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt={name}
      />
      <div className={styles.cardFooter}>
        <p className={styles.cardTitle}>
          {type === "tv" ? original_name : title}
        </p>
      </div>
      {cardPosition === "down" ? (
        <div className={`${styles.scoreBoard} ${styles.down}`}>
          {vote_average?.toFixed(1)} / 10
        </div>
      ) : (
        <div className={`${styles.scoreBoard} ${styles.up}`}>
          {vote_average?.toFixed(1)} / 10
        </div>
      )}
    </div>
  );
};
export default Card;
