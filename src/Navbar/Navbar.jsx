import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import imgUrl1 from "../assets/store-svgrepo-com2.svg";

function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={imgUrl1} />
        <h1>Store</h1>
      </div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/">About</Link>
        <Link to="/">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
