import React from "react";

export default function OrderSummary(props) {
  const {products, totalss} = props;

  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <h3>total: {totalss}</h3>
      <h3>Payment Method</h3>
    </div>
  );
}
