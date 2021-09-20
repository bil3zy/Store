import React from "react";
import {Link} from "react-router-dom";

export default function OnOfferProducts(props) {
  const {product, addCartItem} = props;

  const truncateString = (string) => {
    if (string.length <= 50) {
      return string;
    }
    return string.slice(0, 50) + "...";
  };

  return (
    <div>
      <div className="flex-column align-center on-offer-card">
        <Link to={`/product-details/${product._id}`}>
          <img
            className="medium"
            src={product.image}
            alt={product.title}
            width="120"
            height="220"
          />
        </Link>
        <h2 className="on-offer-product-title">
          {truncateString(product.title)}
        </h2>
        <h3 className="product-price-line-through">{product.price} QR</h3>
        <h3 className="product-price">{product.price} QR</h3>
        <button
          className="addtocart"
          onClick={() => {
            addCartItem(product);
          }}
        >
          Add to cart
        </button>
      </div>
      <div className="offer-icon">20%</div>
    </div>
  );
}
