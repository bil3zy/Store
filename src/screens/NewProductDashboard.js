import {doc, setDoc} from "firebase/firestore";
import React from "react";
import db from "../firebase";
import useInput from "../hooks/useInput";

export default function NewProductDashboard() {
  const [brand, setBrand] = useInput("");
  const [category, setCategory] = useInput("");
  const [countInStock, setCountInStock] = useInput("");
  const [image, setImage] = useInput("");
  const [offer, setOffer] = useInput("");
  const [offerImage, setOfferImage] = useInput("");
  const [price, setPrice] = useInput("");
  const [subcategory, setSubcategory] = useInput("");
  const [title, setTitle] = useInput("");
  const [topSelling, setTopSelling] = useInput("");
  const [weight, setWeight] = useInput("");

  const newDocFirebase = async () => {
    const docRef = doc(db, "products", "7");
    const payload = {
      title: title,
      category: category,
      subcategory: subcategory,
      image: image,
      price: price,
      brand: brand,
      countInStock: countInStock,
      weight: weight,
      offer: offer,
      offerImage: offerImage,
      topSelling: topSelling,
    };
    await setDoc(docRef, payload);
    console.log("added");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newDocFirebase();
    alert("Products have been added");
  };

  return (
    <div>
      <div className="flex-row space-evenly ">
        <div className="flex-column checkout-form align-center">
          <form
            className="flex-column checkout-form align-center"
            onSubmit={handleSubmit}
          >
            <h2>Add product to database</h2>
            <input
              onChange={setBrand}
              type="text"
              value={brand}
              placeholder="Brand"
              required
            />
            <input
              onChange={setCategory}
              type="text"
              value={category}
              placeholder="Category"
              required
            />
            <input
              onChange={setCountInStock}
              type="text"
              value={countInStock}
              placeholder="Count In Stock"
              required
            />
            <input
              onChange={setImage}
              type="text"
              value={image}
              placeholder="Image: /images/p(id).png"
              required
            />
            <input
              onChange={setOffer}
              type="text"
              value={offer}
              placeholder="Offer: true/false"
              required
            />
            <input
              onChange={setOfferImage}
              type="text"
              value={offerImage}
              placeholder="Offer image if offer is true otherwise empty"
            />
            <input
              onChange={setPrice}
              type="text"
              value={price}
              placeholder="Price"
              required
            />
            <input
              onChange={setSubcategory}
              type="text"
              value={subcategory}
              placeholder="Subcategory"
              required
            />
            <input
              onChange={setTitle}
              type="text"
              value={title}
              placeholder="Product name"
              required
            />
            <input
              onChange={setTopSelling}
              type="text"
              value={topSelling}
              placeholder="Top Selling: true/false"
              required
            />
            <input
              onChange={setWeight}
              type="text"
              value={weight}
              placeholder="Weight"
              required
            />
            <button className="checkout-submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
