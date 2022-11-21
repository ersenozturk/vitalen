import styles from "./VideoSection.module.css";
const VideoSection = ({ videoKey }) => {
  return (
    <div className={styles.container}>

      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
