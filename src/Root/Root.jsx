import "./Root.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage.jsx";
import Store from "../Store/Store.jsx";
import About from "../About/About.jsx";
import Cart from "../Cart/Cart.jsx";
import ErrorPage from "../error-page.jsx";

function Root() {
  const [cart, setCart] = useState([]);
  const [storeData, setStoreData] = useState([])
  return (
    <>
      <Navbar cart={cart} />
      <Outlet />

      <Routes>
        <Route path="" element={<Homepage />} errorElement={<ErrorPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route
          path="/store"
          element={<Store cart={cart} setCart={setCart} storeData={storeData} setStoreData={setStoreData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default Root;
