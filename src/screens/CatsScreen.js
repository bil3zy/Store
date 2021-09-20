import React from "react";
import CatsProducts from "../components/CatsProducts";
import FloatingCartIcon from "../components/FloatingCartIcon";
import data from "../data";

export default function Cats(props) {
  const {addCartItem, changed, products} = props;

  // const filterByCats = (product) => {
  //   return product.category === "Cats";
  // };

  // const filterByFood = (product) => {
  //   return product.subcategory === "Food";
  // };
  // const filterByLitter = (product) => {
  //   return product.subcategory === "Litter";
  // };

  return (
    <div>
      <div className="flex-column align-center">
        <h2 className="subcategory flex-row">Cat Food</h2>
      </div>
      <div className="grid-row cats-products">
        {products
          // .filter(filterByCats)
          // .filter(filterByFood)
          .map((product) => (
            <CatsProducts
              key={product.id}
              product={product}
              addCartItem={addCartItem}
              changed={changed}
            />
          ))}
      </div>
      <div className="flex-column align-center">
        <h2 className="subcategory flex-row">Cat Litter</h2>
      </div>
      {/* <div className="grid-row">
        {products
          // .filter(filterByCats)
          // .filter(filterByLitter)
          .map((product) => (
            <CatsProducts
              key={product.id}
              product={product}
              addCartItem={addCartItem}
              changed={changed}
            />
          ))}
      </div> */}
      <div>
        {changed > 0 ? <FloatingCartIcon changed={props.changed} /> : ""}
      </div>
    </div>
  );
}
