import React from "react";
import CatsProducts from "../components/CatsProducts";
import data from "../data";

export default function Cats(props) {
  const products = data.products;
  const {added} = props;

  const filterByCats = (product) => {
    return product.category === "Cats";
  };

  const filterByFood = (product) => {
    return product.subcategory === "Food";
  };
  const filterByLitter = (product) => {
    return product.subcategory === "Litter";
  };

  return (
    <div>
      <div className="flex-column align-center">
        <h2 className="subcategory flex-row">Cat Food</h2>
      </div>
      <div className="grid-row cats-products">
        {products
          .filter(filterByCats)
          .filter(filterByFood)
          .map((product) => (
            <CatsProducts key={product._id} product={product} added={added} />
          ))}
      </div>
      <div className="flex-column align-center">
        <h2 className="subcategory flex-row">Cat Litter</h2>
      </div>
      <div className="grid-row">
        {products
          .filter(filterByCats)
          .filter(filterByLitter)
          .map((product) => (
            <CatsProducts key={product._id} product={product} added={added} />
          ))}
      </div>
    </div>
  );
}
