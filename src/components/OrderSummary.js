import React from "react";
import {Link, useLocation} from "react-router-dom";
import data from "../data";

export default function OrderSummary(props) {
  const {cart} = props;

  // cart.map((product) => {
  //   return console.log(product.image);
  // });

  // let total = cart.map((product) => {
  //   return parseInt(product.price, 10);
  // });

  console.log(cart);

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

  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <p>
        <strong>Subtotal:</strong> {subtotal} {subtotal > 0 ? "QR" : ""}
      </p>
      <p>
        <strong>Delivery Fee:</strong> 15 QR
      </p>
      <p>
        <strong>Total:</strong> {total} {total > 0 ? "QR" : ""}
      </p>
      {useLocation().pathname !== "/CheckoutScreen" ? (
        <Link to="/CheckoutScreen">
          <button className="summary-proceed">Proceed to Checkout</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
