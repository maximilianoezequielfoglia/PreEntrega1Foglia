import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <a className="nav-brand" href="#">
        <h1>TIENDA</h1>
      </a>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">all</a>
        <a href="#">top</a>
        <a href="#">bottom</a>
      </div>
      <div
        className={`nav-menu ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
