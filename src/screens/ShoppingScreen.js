import React, {useState} from "react";
import CartCard from "../components/CartCard";
import data from "../data.js";
import OrderSummary from "../components/OrderSummary";

function ShoppingScreen() {
  const [total, setTotal] = useState(0);

  const renderCartedProduct = data.products
    .filter((product) => product.quantity !== 0)
    .map((product) => <CartCard key={product._id} product={product} />);

  return (
    <div className="flex-row space-evenly">
      <div className="flex-row cart">
        <h1 className="cart-title">Shopping cart</h1>
      </div>
      <div className="flex-column">{renderCartedProduct}</div>
      <OrderSummary />
    </div>
  );
}

export default ShoppingScreen;
