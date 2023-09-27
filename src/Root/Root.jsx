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
  const [cart, setCart] = useState({});
  const [storeData, setStoreData] = useState([]);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    let itemsQty = []
    for (let key in cart) {
        itemsQty.push(cart[key].qty)
    }
    const cartQuantity = itemsQty.reduce((acc, curr) => acc + curr, 0);
    
    setCartQty(cartQuantity);
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
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} storeData={storeData} />}
        />
      </Routes>
    </>
  );
}

export default Root;
