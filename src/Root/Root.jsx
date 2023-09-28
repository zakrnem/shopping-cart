import "./Root.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage.jsx";
import Store from "../Store/Store.jsx";
import About from "../About/About.jsx";
import Cart from "../Cart/Cart.jsx";
import ErrorPage from "../error-page.jsx";

function Root() {
  const [cart, setCart] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let itemsQty = [];
    for (let key in cart) {
      itemsQty.push(cart[key].qty);
    }
    const cartQuantity = itemsQty.reduce((acc, curr) => acc + curr, 0);
    setCartQty(cartQuantity);
  }, [cart]);

  useEffect(() => {
    let itemsTotal = [];
    for (let key in cart) {
      const itemQty = cart[key].qty;
      const currIndex = cart[key].id - 1;
      const itemPrice = storeData[currIndex].price;
      itemsTotal.push(itemQty * itemPrice);
    }
    const cartQuantity = itemsTotal.reduce((acc, curr) => acc + curr, 0);
    setCartTotal(cartQuantity);
  }, [cart]);

  const handleAddCart = (e) => {
    const item = parseInt(e.target.id);
    let updatedCart = [...cart];

    let cartItems = [];
    for (let key in cart) {
      cartItems.push(cart[key].id);
    }
    if (!cartItems.includes(item)) {
      updatedCart = [...updatedCart, { id: item, qty: 1 }];
      setCart(updatedCart);
    } else {
      const index = cartItems.indexOf(item);
      updatedCart[index] = {
        ...updatedCart[index],
        qty: ++updatedCart[index].qty,
      };
      setCart(updatedCart);
    }
  };

  const handleRemoveItem = (e) => {
    const prevCart = [...cart];
    const item = parseInt(e.target.id);
    let cartIds = [];
    for (let key in cart) {
      cartIds.push(cart[key].id);
    }
    const index = cartIds.indexOf(item);

    prevCart.splice(index, 1);
    setCart(prevCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Navbar cartQty={cartQty} />
      <Outlet />

      <Routes>
        <Route path="" element={<Homepage />} errorElement={<ErrorPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/store"
          element={
            <Store
              cart={cart}
              setCart={setCart}
              storeData={storeData}
              setStoreData={setStoreData}
              handleAddCart={handleAddCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              storeData={storeData}
              cartQty={cartQty}
              cartTotal={cartTotal}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default Root;
