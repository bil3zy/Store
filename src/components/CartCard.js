import React from "react";

function CartCard(props) {
  const {product, addCartItem, removeCartItem, deleteFromCart, cart} = props; //from CartScreen.js
  const truncateString = (string) => {
    if (string.length <= 50) {
      return string;
    }
    return string.slice(0, 50) + "...";
  };
  let quantity = cart.filter((val) => val === product).length;

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
              <strong>Unit price:</strong>
              {product.price}QR
            </p>
            <p className="card-price">
              <strong>Total:</strong> {product.price * quantity}QR
            </p>
          </div>
          <div className="flex-row buttons">
            <button className="minus" onClick={() => removeCartItem(product)}>
              -
            </button>
            <p className="quantity">{quantity}</p>
            <button className="plus" onClick={() => addCartItem(product)}>
              +
            </button>
            <p
              className="remove-product-tag"
              onClick={() => deleteFromCart(product)}
            >
              Remove Product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
