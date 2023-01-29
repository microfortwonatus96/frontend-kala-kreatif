import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Cartcontext} from "../../Context/Contex";
import "./Header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false)
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const total = state.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  return (
    <>
      <nav>
        <div className="header__logo">Kala Kreatif</div>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="navbar">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Logout</a>
            </li>           
            <div className="nav-cart">
              <span>{total}</span>

              <Link to="/cart">
                <i className="fas fa-shopping-cart">
                  <Link to="/cart"></Link>
                </i>
              </Link>
            </div>
          </ul>
          <i className="fas fa-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div id="mobile" className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className= "fas fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Header;
