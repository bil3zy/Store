import React from "react";
import {Link, useLocation} from "react-router-dom";

export default function OrderSummary(props) {
  const {total} = props;
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
          <button>Proceed to Checkout</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
