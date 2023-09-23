import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <h1>Welcome to The Store!</h1>
      <p>Your Destination for Quality and Style.</p>
      <button><Link to="/home">Shop now</Link></button>
    </div>
  );
}

export default Homepage;