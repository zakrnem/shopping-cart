import { useState, useEffect } from "react";
import styles from "./Store.module.css";

function Store() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleClick = (e) => {
    console.log(e.target.parentElement.id)
  }

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
    if (error !== null) console.log(error)
  }, [error])

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
            <button className={styles.addcart} onClick={(e) => handleClick(e)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Store;
