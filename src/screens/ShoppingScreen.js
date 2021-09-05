import React from "react";
import CartCard from "../components/CartCard";
import data from "../data.js";
import OrderSummary from "../components/OrderSummary";
import {Link} from "react-router-dom";

function ShoppingScreen(props) {
  const {addedWithState, removed, changed} = props;

  const renderCartedProduct = data.products
    .filter((product) => product.quantity !== 0)
    .map((product) => (
      <CartCard
        key={product._id}
        product={product}
        added={addedWithState}
        removed={removed}
      />
    ));

  let total = data.products
    .map((product) => {
      if (product.quantity > 0) {
        return parseInt(product.price, 10) * product.quantity;
      } else return 0;
    })
    .reduce((acc, val) => acc + val, 15);
  return (
    <div>
      <div className="app-nav-bar">
        <Link to="/">Home</Link>
        <div className="nav-bar-margins">{">"}</div>
        <div>Your Shopping Cart</div>
      </div>

      <div className="flex-row space-evenly">
        <div className="flex-row cart">
          <h1 className="cart-title">Shopping cart</h1>
        </div>
        <div className="flex-column">
          {changed > 0 ? (
            renderCartedProduct
          ) : (
            <h3 className="cart-empty">Your Shopping cart is empty</h3>
          )}
        </div>
        {changed > 0 ? <OrderSummary total={total} /> : ""}
      </div>
    </div>
  );
}

export default ShoppingScreen;
