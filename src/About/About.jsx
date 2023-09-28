import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1>This is a fake store</h1>
      <button>
        <a href="https://github.com/zakrnem">{`See Zakrnem's Github Page`}</a>
      </button>
    </div>
  );
}

export default About;
