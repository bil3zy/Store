import React from "react";

function Product(props) {
  const {product} = props;
  const added = (obj) => {
    obj.quantity++;
    console.log(obj.quantity);
  };
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
          added(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default Product;
