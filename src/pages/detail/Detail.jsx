import styles from "./Detail.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import VideoSection from "../../components/videoSection/VideoSection";
import noProfile from "../../images/no-craw-profile.jpg";
import { useAppContext } from "../../hooks/useAppContext";

const Detail = () => {
  const type = useLocation().state;

  const navigate = useNavigate();
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [videoKey, setVideoKey] = useState("");
  const [cast, setCast] = useState([]);

  const { API_KEY } = useAppContext();

  const detailBaseUrl = `https://api.themoviedb.org/3/${
    type === "movie" ? "movie" : "tv"
  }/${id}?api_key=${API_KEY}`;

  const videoUrl = `https://api.themoviedb.org/3/${
    type === "movie" ? "movie" : "tv"
  }/${id}/videos?api_key=${API_KEY}`;

  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  const castUrl = `https://api.themoviedb.org/3/${
    type === "movie" ? "movie" : "tv"
  }/${id}/credits?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US`;

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

  const {
    title,
    poster_path,
    overview,
    release_date,
    genres,
    production_companies,
    vote_average,
  } = detail;

  return (
    <div className={styles.container}>
      <div className={styles.goBack} onClick={() => navigate(-1)}>
        GO BACK
      </div>
      {/*! title and youtube video */}
      <h1 className={styles.title}>{title}</h1>
      {videoKey && <VideoSection videoKey={videoKey} />}

      {/*! detail movie/tv */}
      <div className={styles.overviewPoster}>
        <div className={styles.posterDiv}>
          <img
            src={poster_path ? baseImageUrl + poster_path : defaultImage}
            alt={title}
          />
          <section className={styles.genreProduction}>
            <ul>
              <li>
                <b>RATE :</b> {vote_average?.toFixed(1)} / 10
              </li>
              <li>
                <b>RELEASE:</b> {release_date}
              </li>
            </ul>
          </section>
        </div>

        <div className={styles.overviewRight}>
          <div className={styles.overview}>
            <h5 style={{ marginBottom: "22.5px" }}>Overview</h5>
            <p>{overview}</p>
          </div>
          <h5>Genres</h5>
          <ul>
            {genres?.map((x, i) => {
              return <li key={i}>{x?.name}</li>;
            })}
          </ul>
          <h5>Production Companies</h5>
          <ul>
            {production_companies?.map((x, index) => {
              return <li key={index}>{x?.name}</li>;
            })}
          </ul>
        </div>
      </div>
      {/*! cast */}
      <h2 className={styles.castTitle}>
        A cast of <span>{cast?.length}</span> players;{" "}
      </h2>
      <div className={styles.cast}>
        {cast.map((eachCast) => {
          return (
            <div key={eachCast.id} className={styles.profile}>
              {eachCast?.profile_path !== null ? (
                <img
                  className={styles.profileImg}
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${eachCast?.profile_path}`}
                  alt={eachCast?.name}
                />
              ) : (
                <img
                  className={styles.noProfileImg}
                  src={noProfile}
                  alt="default img"
                />
              )}

              <div className={styles.profileFooter}>
                <p className={styles.profileTitle}>{eachCast?.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
