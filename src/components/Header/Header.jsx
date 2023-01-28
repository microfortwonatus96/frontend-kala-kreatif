import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Cartcontext, CartState } from "../../Context/Contex";
import "./Header.css";

const Header = () => {
    const [Toggle, menu] = useState(false)
    
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;

    const total = state.reduce((total, product) => {
      return total + product.quantity;
    },0)
  return (
    <>
      <header>
        {/* <div className="menu"> */}
        <div className={Toggle ? "menu" : "menu"}>
          {/* <img src={Menu} alt="" width="20" /> */}
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="logo">
          <h1>
            <Link to="/">KalaKreatif</Link>
          </h1>
        </div>
        <nav>
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
           
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
            <li className="close"  onClick={() => menu(!Toggle)} >
              {/* <img src={Close} alt="" width="20" /> */}
              <i class="fa-solid fa-xmark"></i>
            </li>
          </ul>
          <div className="nav-cart">
            {/* <span>{cart.length}</span> */}
            <span>{total}</span>
            <Link to="/cart">
              {/* <img src={CartIcon} alt="" width="20" /> */}
              <i className="fas fa-shopping-cart">
              <Link to="/cart"></Link>
              </i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
