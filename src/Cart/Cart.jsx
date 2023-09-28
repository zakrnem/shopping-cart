import styles from "./Cart.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cart({ cart, storeData, cartQty, cartTotal, handleRemoveItem }) {
  return (
    <>
      {cartQty === 0 && (
        <div className={styles["empty-cart"]}>
          <h2>No items yet? Continue shopping to explore more.</h2>
          <button>
            <Link to="/store">Explore items</Link>
          </button>
        </div>
      )}
      {cartQty > 0 && (
        <div className={styles.container}>
          <div className={styles.cart}>
            <div className={styles["your-cart"]}>
              <h2>Your cart</h2>
              <div>({cartQty} items)</div>
            </div>
            <div className={styles.grid}>
              {cart.map((obj) => {
                const index = obj.id - 1;
                const quantity = obj.qty;
                const key = storeData[index].id;
                const title = storeData[index].title;
                const price = storeData[index].price * quantity;
                const imageUrl = storeData[index].image;

                return (
                  <div key={key} className={styles.item}>
                    <img src={imageUrl} alt={title} />
                    <div className={styles.container1}>
                      <div className={styles.title}>{title}</div>
                      <div className={styles.container2}>
                        <div className={styles.quantity}>
                          <button>-</button>
                          <div>{quantity}</div>
                          <button>+</button>
                        </div>
                        <div className={styles.price}>{price}</div>
                        <button
                          className={styles["remove-button"]}
                          onClick={(e) => handleRemoveItem(e)}
                          id={key}
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
                <div>${cartTotal}</div>
              </div>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  handleRemoveItem: PropTypes.func,
  storeData: PropTypes.array,
  cartQty: PropTypes.number,
  cartTotal: PropTypes.number,
};

export default Cart;
