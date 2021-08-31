import React from "react";
import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";

function ShoppingScreen(props) {
  const {products, addedWithState, removed, quantity} = props;

  const renderCartedProduct = products
    .filter((product) => product.quantity !== 0)
    .map((product) => (
      <CartCard
        key={product._id}
        product={product}
        quantity={quantity}
        addedWithState={addedWithState}
        removed={removed}
      />
    ));

  const totalPrices = [];
  products.map((product) => {
    const calcTotalPrice = (price, quantity) => {
      let el = price * quantity;
      totalPrices.push(el);
    };
    return calcTotalPrice(product.price, product.quantity);
    // console.log(totals);
  });
  let totalElements = 0;
  totalPrices.forEach((i) => {
    totalElements = totalElements + i;
  });
  // console.log(totalss);
  return (
    <div className="flex-row space-evenly">
      <div className="flex-row cart">
        <h1 className="cart-title">Shopping cart</h1>
      </div>
      <div className="flex-column">{renderCartedProduct}</div>
      <OrderSummary products={products} totalElements={totalElements} />
    </div>
  );
}

export default ShoppingScreen;
