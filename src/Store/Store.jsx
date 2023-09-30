import { useState, useEffect } from "react";
import styles from "./Store.module.css";
import PropTypes from "prop-types";

function Store({ storeData, setStoreData, handleAddCart, setActiveElement }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    setActiveElement("store");
  }, []);

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
          <div key={key} className={styles.item}>
            <img src={imageUrl} alt={title} />
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            <button
              className={styles.addcart}
              onClick={(e) => handleAddCart(e)}
              id={key}
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

Store.propTypes = {
  storeData: PropTypes.array,
  setStoreData: PropTypes.func,
  handleAddCart: PropTypes.func,
  setActiveElement: PropTypes.func,
};

export default Store;
