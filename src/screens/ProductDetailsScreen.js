import React from "react";
import data from "../data";

export default function ProductDetailsScreen(props) {
  const product = data.products.find(
    (product) => product._id === props.match.params.id
  );

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
        <div className="details-card-buttons flex-row">
          <button
            className="minus"
            onClick={() => {
              props.removedWithoutState(product);
            }}
          >
            -
          </button>
          {props.changed}
          <button
            className="plus"
            onClick={() => {
              props.added(product);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
