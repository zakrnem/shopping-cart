import styles from "./Cart.module.css";
import PropTypes from "prop-types";

function Cart({ cart, setCart, storeData }) {
  const handleClick = (e) => {
    const item = e.target.parentElement.id;
    let updatedCart = [...cart].filter((el) => el !== parseInt(item));
    setCart(updatedCart);
  };

  return (
    <>
      <>Cart</>
      {Object.keys(cart).map((index) => {
        const newIndex = cart[index] - 1;
        const key = storeData[newIndex].id;
        const title = storeData[newIndex].title;
        const price = storeData[newIndex].price;
        const imageUrl = storeData[newIndex].image;
        return (
          <div key={key} className={styles.item} id={key}>
            <img src={imageUrl} alt={title} />
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            <button className={styles.addcart} onClick={(e) => handleClick(e)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  storeData: PropTypes.array,
};

export default Cart;
