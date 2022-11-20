import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>Ersen OZTURK</p>

      <ul className={styles.developerInfo}>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ozturkersen/"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ersenozturk"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
