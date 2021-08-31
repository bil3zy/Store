import React, {useEffect, useState} from "react";

function CartCard(props) {
  const {product, added, quantity} = props;

  // const added = () => {
  //   product.quantity++;
  //   setQuantity(product.quantity);
  // };

  // const removed = () => {
  //   if (product.quantity > 0) {
  //     product.quantity--;
  //     setQuantity(product.quantity);
  //   }
  // };
  console.log(quantity);
  const showQuantity = product.quantity;
  useEffect(
    (showQuantity) => {
      showQuantity = quantity;
      console.log(`effect run with this quantity ${quantity}`);
    },
    [quantity]
  );

  return (
    <div>
      <div className="cart-card space-evenly">
        <img
          className="medium"
          src={product.image}
          alt="Cat Salmon Food"
          width="120"
          height="220"
        />
        <div className="flex-column align-center card-info">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-brand">
            <strong>Brand:</strong> {product.brand}
          </p>
          <div className="flex-row">
            <button className="minus" onClick={() => props.removed(product)}>
              -
            </button>
            <h3>{showQuantity}</h3>
            <button className="plus" onClick={() => props.added(product)}>
              +
            </button>
          </div>
        </div>
        <div className="card-price">
          <h3>{product.price}QR</h3>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
