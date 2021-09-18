import React from "react";
import {HiOutlineShoppingCart, HiShoppingCart} from "react-icons/hi";
import {Link} from "react-router-dom";

export default function HeaderNav(props) {
  return (
    <nav className="nav-bar flex-row space-between align-center">
      <div className="left-side-header flex-row align-center space-evenly">
        <Link className="brand" to="/">
          Aleef Store
        </Link>
        <div className="header-categories flex-row space-evenly">
          <Link className="header-links" id="cats" to="/cats">
            <h3>Cats</h3>
          </Link>
          <Link className="header-links" id="dogs" to="/dogs">
            <h3>Dogs</h3>
          </Link>
        </div>
      </div>
      <Link to="/cart">
        <div className="cart-icon flex-row">
          <p className="cart-number">{props.changed}</p>
          {props.changed > 0 ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
        </div>
      </Link>
    </nav>
  );
}
