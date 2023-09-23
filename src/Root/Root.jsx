import "./Root.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Root;
