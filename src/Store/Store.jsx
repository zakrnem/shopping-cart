import { useState, useEffect } from "react";
import styles from "./Store.module.css";
import PropTypes from "prop-types";

function Store({ cart, setCart, storeData, setStoreData }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddCart = (e) => {
    const item = parseInt(e.target.id);
    let updatedCart = { ...cart }

    let cartItems = []
    for (let key in cart) {
        cartItems.push(cart[key].id)
    }
    if (!cartItems.includes(item)) {
      const index = Object.keys(cart).length + 1;
      updatedCart = { ...updatedCart, [index]: { id: item, qty: 1 } };
      setCart(updatedCart);
    } else {
      const index = cartItems.indexOf(item) + 1
      updatedCart = { ...updatedCart, [index]: { ...updatedCart[index] , qty: ++updatedCart[index].qty } };
      setCart(updatedCart);
    }
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
  cart: PropTypes.object,
  setCart: PropTypes.func,
  storeData: PropTypes.array,
  setStoreData: PropTypes.func,
};

export default Store;
