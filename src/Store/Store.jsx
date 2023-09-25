import { useState, useEffect } from "react";
import styles from "./Store.module.css";
import PropTypes from "prop-types";

function Store({ cart, setCart, storeData, setStoreData }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    const item = e.target.parentElement.id;
    const updatedCart = [...cart, item];
    setCart(updatedCart);
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
      .then((actualData) => setStoreData(actualData))
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
    console.log(cart);
  }, [cart]);

  return (
    <div className={styles.grid}>
      {loading && storeData.length < 1 && (
        <div className={styles.loading}>
          <div className={styles.loader} />
          Loading
        </div>
      )}
      {Object.keys(storeData).map((index) => {
        const key = storeData[index].id;
        const title = storeData[index].title;
        const price = storeData[index].price;
        const imageUrl = storeData[index].image;
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
  storeData: PropTypes.array,
  setStoreData: PropTypes.func
};

export default Store;
