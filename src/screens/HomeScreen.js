import React, {useState} from "react";
import Product from "../components/Product";
import data from "../data";

function HomeScreen(props) {
  return (
    <section className="grid-row">
      {data.products.map((product) => (
        <Product key={product._id} product={product} added={props.added} />
      ))}
    </section>
  );
}

export default HomeScreen;
