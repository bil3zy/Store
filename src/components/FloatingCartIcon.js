import React from "react";
import {HiShoppingCart} from "react-icons/hi";
import {Link} from "react-router-dom";

export default function FloatingCartIcon(props) {
  const {changed} = props;
  return (
    <Link to="/cart">
      <div className="floating-cart-icon">
        <p className="floating-cart-number">{changed}</p>
        <HiShoppingCart style={{color: "white"}} />
      </div>
    </Link>
  );
}
