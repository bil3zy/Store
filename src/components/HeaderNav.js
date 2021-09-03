import React from "react";
import {HiOutlineShoppingCart, HiShoppingCart} from "react-icons/hi";
import {Link} from "react-router-dom";

export default function HeaderNav(props) {
  return (
    <nav className="nav-bar flex-row space-evenly align-center">
      <ul className="flex-row align-center">
        <li>
          <Link id="categories" to="/categories">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
      <div className="cart-icon flex-row">
        <p className="cart-number">{props.changed}</p>
        <Link to="/cart">
          {props.changed > 0 ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
        </Link>
      </div>
    </nav>
  );
}
