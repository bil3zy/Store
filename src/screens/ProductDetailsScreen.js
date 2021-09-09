import React from "react";
import data from "../data";

export default function ProductDetailsScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  console.log(product);
  console.log(props.match.params);
  return (
    <div className="details-card flex-row">
      <img
        className="large"
        src={product.image}
        alt="Cat Salmon Food"
        width="400"
        height="700"
      />
      <div className="flex-column details-card-info">
        <div className="flex-column align-center details-card-info-title-description">
          <h2 className="product-title">{product.title}</h2>
          <p>{product.title}</p>
        </div>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Weight:</strong> {product.weight}
        </p>
        <p className="product-price">
          <strong>Price:</strong> {product.price}QR
        </p>
        {/* <button
        className="addtocart"
        onClick={() => {
          added(product);
        }}
      >
        Add to cart
      </button> */}
      </div>
    </div>
  );
}
