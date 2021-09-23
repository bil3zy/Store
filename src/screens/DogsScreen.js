import React from "react";
import DogsProducts from "../components/DogsProducts";
import FloatingCartIcon from "../components/FloatingCartIcon";

export default function Dogs(props) {
  const {addCartItem, changed, products} = props;

  const filterByDogs = (product) => {
    return product.category === "Dogs";
  };

  const filterByFood = (product) => {
    return product.subcategory === "Food";
  };

  return (
    <div>
      <div className="flex-column align-center">
        <h2 className="subcategory flex-row">Dog Food</h2>
      </div>
      <div className="grid-row cats-products">
        {products
          .filter(filterByDogs)
          .filter(filterByFood)
          .map((product) => (
            <DogsProducts
              key={product._id}
              product={product}
              addCartItem={addCartItem}
              changed={changed}
            />
          ))}
      </div>
      <div>
        {changed > 0 ? <FloatingCartIcon changed={props.changed} /> : ""}
      </div>
    </div>
  );
}
