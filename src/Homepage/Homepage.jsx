import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
/* import PropTypes from "prop-types"; */

function Homepage() {
  return (
    <div className={styles.homepage}>
      <h1>Welcome to The Store!</h1>
      <p>Your Destination for Quality and Style.</p>
      <button>
        <Link to="/store" /* onClick={setActiveElement('store')} */>Shop now</Link>
      </button>
    </div>
  );
}

/* Homepage.propTypes = {
  setActiveElement: PropTypes.func,
}; */

export default Homepage;
