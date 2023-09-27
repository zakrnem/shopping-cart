import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import imgUrl1 from "../assets/store-svgrepo-com2.svg";
import PropTypes from "prop-types";

function Navbar({ cartQty }) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={imgUrl1} />
        <h1>Store</h1>
      </div>
      <div className={styles.links}>
        <Link to="home">Home</Link>
        <Link to="store">Products</Link>
        <Link to="about">About</Link>
        <Link to="cart" className={styles.cart}>
          Cart{" "}
          {cartQty > 0 && <div className={styles.cartcount}>{cartQty}</div>}
        </Link>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  cart: PropTypes.object,
  cartQty: PropTypes.number,
};

export default Navbar;
