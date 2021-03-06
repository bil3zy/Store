import React from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";
import {Link} from "react-router-dom";
import {MdNavigateNext} from "react-icons/md";

function CartScreen(props) {
  const {addCartItem, removeCartItem, deleteFromCart, changed, cart} = props; //from App.js

  cart.sort((a, b) => {
    return a.id - b.id;
  });

  let products = [];
  let quantity = {};
  cart.forEach((product) => {
    return products.push(product.title);
  });
  console.log(products);

  for (const product of products) {
    quantity[product + " x"] = quantity[product + " x"]
      ? quantity[product + " x"] + 1
      : 1;
  }

  console.log(quantity);

  let total = cart
    .map((product) => {
      return parseInt(product.price, 10);
    })
    .reduce((acc, val) => acc + val, 15);

  let subtotal = cart
    .map((product) => {
      return parseInt(product.price, 10);
    })
    .reduce((acc, val) => acc + val, 0);

  let uniqueProducts = [...new Set(cart)];
  const renderCartedProduct = uniqueProducts.map((product) => (
    <CartCard
      key={product._id}
      cart={cart}
      product={product}
      addCartItem={addCartItem}
      removeCartItem={removeCartItem}
      deleteFromCart={deleteFromCart}
    />
  ));

  return (
    <div>
      <div className="app-nav-bar">
        <Link to="/">Home</Link>
        <div className="nav-bar-margins">
          <MdNavigateNext />
        </div>
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
        {changed > 0 ? (
          <OrderSummary
            cart={cart}
            quantity={quantity}
            total={total}
            subtotal={subtotal}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartScreen;
