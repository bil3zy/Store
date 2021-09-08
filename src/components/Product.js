import React from "react";

function Product(props) {
  const {product, added} = props;

  const truncateString = (string) => {
    if (string.length <= 60) {
      return string;
    }
    return string.slice(0, 50) + "...";
  };

  return (
    <div className="flex-column align-center card">
      <img
        className="medium"
        src={product.image}
        alt="Cat Salmon Food"
        width="120"
        height="220"
      />
      <h2 className="product-title">{truncateString(product.title)}</h2>
      <div>
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
    </div>
  );
}

export default Product;
