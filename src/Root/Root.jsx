import "./Root.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <h1>Root</h1>
      <Outlet />
    </>
  );
}

export default Root;
