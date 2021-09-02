import React, {useState} from "react";
import CartCard from "../components/CartCard";
import data from "../data.js";
import OrderSummary from "../components/OrderSummary";

function ShoppingScreen(props) {
  const [changed, setChanged] = useState(0);

  const renderCartedProduct = data.products
    .filter((product) => product.quantity !== 0)
    .map((product) => (
      <CartCard
        key={product._id}
        product={product}
        added={props.addedWithState}
        removed={props.removed}
      />
    ));

  let total = data.products
    .map((product) => {
      if (product.quantity > 0) {
        return parseInt(product.price, 10) * product.quantity;
      } else return 0;
    })
    .reduce((acc, val) => acc + val, 0);

  return (
    <div className="flex-row space-evenly">
      <div className="flex-row cart">
        <h1 className="cart-title">Shopping cart</h1>
      </div>
      <div className="flex-column">{renderCartedProduct}</div>
      <OrderSummary total={total} />
    </div>
  );
}

export default ShoppingScreen;
