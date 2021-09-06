import React from "react";

function Product(props) {
  const {product, added} = props;

  return (
    <div className="flex-column align-center card">
      <img
        className="medium"
        src={product.image}
        alt="Cat Salmon Food"
        width="120"
        height="220"
      />
      <h2 className="product-title">{product.title}</h2>
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

export default Product;
