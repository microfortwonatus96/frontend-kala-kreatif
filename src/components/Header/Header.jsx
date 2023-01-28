import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [Toggle, menu] = useState(false)
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
            <span>0</span>
            <Link to="/cart">
              {/* <img src={CartIcon} alt="" width="20" /> */}
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
