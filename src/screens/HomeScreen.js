import React from "react";
import {Link} from "react-router-dom";
import Product from "../components/Product";
import data from "../data";

function HomeScreen(props) {
  const {added} = props;
  return (
    <div>
      <section className="grid-row">
        {data.products.map((product) => (
          <Product key={product._id} product={product} added={added} />
        ))}
      </section>
    </div>
  );
}

export default HomeScreen;
