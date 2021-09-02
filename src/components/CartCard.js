import React, {useState} from "react";

function CartCard(props) {
  const {product} = props;
  const [quantity, setQuantity] = useState(product.quantity);

  const added = () => {
    product.quantity++;
    console.log(product.quantity);
    setQuantity((quantity) => quantity + 1);
  };
  const removed = () => {
    if (product.quantity > 0) {
      product.quantity--;
      console.log(product.quantity);
      setQuantity((quantity) => quantity - 1);
    }
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
        <div className="flex-column align-center card-info">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-brand">
            <strong>Brand:</strong> {product.brand}
          </p>
          <div className="flex-row">
            <button className="minus" onClick={() => removed(product)}>
              -
            </button>
            <h3>{quantity}</h3>
            <button className="plus" onClick={() => added(product)}>
              +
            </button>
          </div>
        </div>
        <div className="card-price">
          <h3>{product.price}QR</h3>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
