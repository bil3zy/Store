import React from "react";
import OnOfferProducts from "../components/OnOfferProducts";
import SlideImages from "../components/SlideImages";
import TopSellingProducts from "../components/TopSellingProducts";
import data from "../data";

function HomeScreen(props) {
  const {added} = props;
  const products = data.products;

  const filterByTopSelling = (product) => {
    return product.topSelling === true;
  };

  const filterByOffer = (product) => {
    return product.offer === true;
  };

  return (
    <div>
      {/* <section className="grid-row">
        {data.products.map((product) => (
          <Product key={product._id} product={product} added={added} />
        ))}
      </section> */}
      <SlideImages />
      <div className="flex-column align-center asd sticky">
        <h2 className="subcategory flex-row">Offers</h2>
      </div>
      <div className="grid-row cats-products ">
        {products.filter(filterByOffer).map((product) => (
          <OnOfferProducts key={product._id} product={product} added={added} />
        ))}
      </div>
      <div className="flex-column align-center asd sticky">
        <h2 className="subcategory flex-row">Top Selling</h2>
      </div>
      <div className="grid-row cats-products">
        {products.filter(filterByTopSelling).map((product) => (
          <TopSellingProducts
            key={product._id}
            product={product}
            added={added}
          />
        ))}
      </div>
      <p>Our brands</p>
    </div>
  );
}

export default HomeScreen;
