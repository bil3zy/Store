import React from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";

function ShoppingScreen(props) {
  const {products, added, removed, quantity} = props;

  const renderCartedProduct = products
    .filter((product) => product.quantity !== 0)
    .map((product) => (
      <CartCard
        key={product._id}
        product={product}
        quantity={quantity}
        added={added}
        removed={removed}
      />
    ));

  const totals = [];
  products.map((product) => {
    const total = (i, p) => {
      let o = i * p;
      totals.push(o);
    };
    total(product.price, product.quantity);
    // console.log(totals);
  });
  let totalss = 0;
  totals.forEach((i) => {
    totalss = totalss + i;
  });
  // console.log(totalss);
  return (
    <div className="flex-row space-evenly">
      <div className="flex-row cart">
        <h1 className="cart-title">Shopping cart</h1>
      </div>
      <div className="flex-column">{renderCartedProduct}</div>
      <OrderSummary products={products} totalss={totalss} />
    </div>
  );
}

export default ShoppingScreen;
