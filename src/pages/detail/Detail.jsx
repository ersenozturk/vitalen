import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoSection from "../../components/videoSection/VideoSection";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [videoKey, setVideoKey] = useState("");
  const [cast, setCast] = useState([]);

  // const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const API_KEY = "300486eba1a4a782eeecb32a1d9d72f4";

  const detailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US`;

  useEffect(() => {
    axios
      .get(detailBaseUrl)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((err) => console.log(err));
    axios
      .get(castUrl)
      .then((res) => setCast(res.data.cast))
      .catch((err) => console.log(err));
  }, [detailBaseUrl, videoUrl, castUrl]);

  // console.log(1111111111111111, detail);
  // console.log(222222222222, videoKey);

  const {
    title,
    poster_path,
    overview,
    release_date,
    genres,
    production_companies,
    vote_average,
  } = detail;

  // const { name, profile_path } = cast;
  console.log(cast);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}

      <div>
        <div className={styles.posterDiv}>
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt={title}
          />
        </div>
        <div>
          <div className={styles.overview}>
            <h5>Overview</h5>
            <p>{overview}</p>
          </div>
          <ul>
            <li>RATE : {vote_average}</li>
            <li>release_date : {release_date}</li>
            <li>
              <div>
                <h5>production_companies</h5>
                {production_companies?.map((x) => {
                  return <li>{x?.name}</li>;
                })}
              </div>
            </li>
            <li>
              <div>
                <h5>genres</h5>
                {genres?.map((x) => {
                  return <li>{x?.name}</li>;
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div>
        {cast.map((eachCast) => {
          return (
            <div>
              <h5>{eachCast?.name}</h5>
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face/${eachCast?.profile_path}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
