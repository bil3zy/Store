import React, {useEffect, useState} from "react";
import data from "../data";

export default function OrderSummary(props) {
  const [total, setTotal] = useState(0);

  let totalPrice = 0;
  let totalElements = [];
  let calcTotalPrice = (price, quantity) => {
    let el = price * quantity;
    totalElements = [...totalElements, el];
    console.log(totalElements, el);
  };
  data.products.map((product) => {
    if (product.quantity > 0)
      return calcTotalPrice(product.price, product.quantity);
  });
  console.log(totalElements);
  totalElements.forEach((el) => {
    if (el > 0) {
      totalPrice = totalPrice + el;
      console.log(totalPrice);
    }
  });
  setTotal(1);
  console.log(total);
  console.log(totalPrice);
  return (
    <div className="flex-column summary">
      <h2>Order Summary</h2>
      <h3>total: {0}</h3>
      <h3>Payment Method</h3>
    </div>
  );
}
