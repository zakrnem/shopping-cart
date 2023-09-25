import { useState, useEffect } from "react";
import styles from "./Store.module.css";
import PropTypes from "prop-types";

function Store({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    const item = e.target.parentElement.id
    const updatedCart = [ ...cart, item ]
    setCart(updatedCart)
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setData(actualData))
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (error !== null) console.log(error);
  }, [error]);

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <div className={styles.grid}>
      {loading && (
        <div className={styles.loading}>
          <div className={styles.loader} />
          Loading
        </div>
      )}
      {Object.keys(data).map((index) => {
        const key = data[index].id;
        const title = data[index].title;
        const price = data[index].price;
        const imageUrl = data[index].image;
        return (
          <div key={key} className={styles.item} id={key}>
            <img src={imageUrl} alt={title} />
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            <button className={styles.addcart} onClick={(e) => handleClick(e)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

Store.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
};

export default Store;
