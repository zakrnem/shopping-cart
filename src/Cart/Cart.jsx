import styles from "./Cart.module.css";
import PropTypes from "prop-types";

function Cart({ cart, setCart, storeData }) {
  const handleClick = (e) => {
    const item = e.target.parentElement.id;
    let updatedCart = [...cart].filter((el) => el !== parseInt(item));
    setCart(updatedCart);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles['your-cart']}>
        <h2>Your cart</h2>
        <div>(XX items)</div>
        </div>
        <div className={styles.grid}>
          {Object.keys(cart).map((index) => {
            const newIndex = cart[index] - 1;
            const key = storeData[newIndex].id;
            const title = storeData[newIndex].title;
            const price = storeData[newIndex].price;
            const imageUrl = storeData[newIndex].image;
            return (
              <div key={key} className={styles.item} id={key}>
                <img src={imageUrl} alt={title} />
                <div className={styles.container1}>
                  <div className={styles.title}>{title}</div>
                  <div className={styles.container2}>
                    <div className={styles.quantity}>
                      <button>-</button>
                      <div>Quatity</div>
                      <button>+</button>
                    </div>
                    <div className={styles.price}>{price}</div>
                    <button
                      className={styles['remove-button']}
                      onClick={(e) => handleClick(e)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.summary}>
        <h2>Summary</h2>
        <div className={styles.container3}>
          <div className={styles.total}>
            <div>Estimated Total</div>
            <div>$0.00</div>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func,
  storeData: PropTypes.array,
};

export default Cart;
