import styles from "./VideoSection.module.css";
const VideoSection = ({ videoKey }) => {
  return (
    <div className={styles.container}>

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
