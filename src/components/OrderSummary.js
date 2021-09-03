import React from "react";

export default function OrderSummary(props) {
  const {total} = props;
  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <p>
        <strong>Delivery Fee:</strong> 15 QR
      </p>
      <p>
        <strong>Total:</strong> {total} QR
      </p>
    </div>
  );
}
