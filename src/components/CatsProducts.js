import React from "react";

export default function CatsProducts(props) {
  const {product, added} = props;

  const truncateString = (string) => {
    if (string.length <= 50) {
      return string;
    }
    return string.slice(0, 50) + "...";
  };

  return (
    <div className="flex-column align-center card">
      <img
        className="medium"
        src={product.image}
        alt={product.title}
        width="120"
        height="220"
      />
      <h2 className="product-title">{truncateString(product.title)}</h2>
      <h3 className="product-price">{product.price}QR</h3>
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
