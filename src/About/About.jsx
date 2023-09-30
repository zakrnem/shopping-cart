import { useEffect } from "react";
import styles from "./About.module.css";
import PropTypes from "prop-types";

function About({ setActiveElement }) {
  useEffect(() => {
    setActiveElement("about");
  }, []);
  return (
    <div className={styles.container}>
      <h1>This is a fake store</h1>
      <button>
        <a href="https://github.com/zakrnem">{`See Zakrnem's Github Page`}</a>
      </button>
    </div>
  );
}

About.propTypes = {
  setActiveElement: PropTypes.func,
};

export default About;
