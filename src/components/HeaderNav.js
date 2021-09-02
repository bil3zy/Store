import React from "react";
import {HiOutlineShoppingCart, HiShoppingCart} from "react-icons/hi";
import {Link} from "react-router-dom";

export default function HeaderNav(props) {
  return (
    <div>
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
          <li>
            <Link to="/cart">
              <HiShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
