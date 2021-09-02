import React from "react";

export default function OrderSummary(props) {
  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <h3>Total: {props.total}</h3>
      <h3>Payment Method</h3>
    </div>
  );
}
