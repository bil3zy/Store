import React from "react";
import {Link, useLocation} from "react-router-dom";
import data from "../data";

export default function OrderSummary(props) {
  let total = data.products
    .map((product) => {
      if (product.quantity > 0) {
        return parseInt(product.price, 10) * product.quantity;
      } else return 0;
    })
    .reduce((acc, val) => acc + val, 15);

  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <p>
        <strong>Delivery Fee:</strong> 15 QR
      </p>
      <p>
        <strong>Total:</strong> {total} {total > 0 ? "QR" : ""}
      </p>
      {useLocation().pathname !== "/checkout" ? (
        <Link to="/checkout">
          <button className="summary-proceed">Proceed to Checkout</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
