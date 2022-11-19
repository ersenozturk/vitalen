import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ eachTV }) => {
  const navigate = useNavigate();

  const { id, poster_path, name, original_name } = eachTV;

  
  return (
    <div className={styles.card} onClick={() => navigate("/detail/" + id)}>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt={name}
      />
      <div className={styles.cardFooter}>
        <p className={styles.cardTitle}>{original_name}</p>
      </div>
    </div>
  );
};

export default Card;
