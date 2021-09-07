import React, {useState} from "react";

function CartCard(props) {
  const {product, added, removed} = props;
  const [quantity, setQuantity] = useState(product.quantity);

  const truncateString = (string) => {
    if (string.length <= 50) {
      return string;
    }
    return string.slice(0, 50) + "...";
  };

  console.log(`db ${product.quantity}`);
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
        <div className="flex-column align-left">
          <div className="card-info">
            <h2 className="card-title">{truncateString(product.title)}</h2>
            <p className="card-brand">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="card-weight">
              <strong>Weight:</strong> {product.weight}
            </p>
            <p className="card-price">
              <strong>Price:</strong> {product.price}QR
            </p>
          </div>
          <div className="flex-row buttons">
            <button
              className="minus"
              onClick={() => removed(product, setQuantity)}
            >
              -
            </button>
            <p className="quantity">{quantity}</p>
            <button
              className="plus"
              onClick={() => added(product, setQuantity)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
