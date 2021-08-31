import React from "react";

function Product(props) {
  const {product} = props;
  return (
    <div className="flex-column align-center card">
      <a href="/cart/">
        <img
          className="medium"
          src={product.image}
          alt="Cat Salmon Food"
          width="120"
          height="220"
        />
      </a>
      <a href="/cart/">
        <h2>{product.title}</h2>
      </a>
      <h3>{product.price}QR</h3>
      <button
        className="addtocart"
        onClick={() => {
          product.quantity++;
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
