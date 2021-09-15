import React from "react";
import data from "../data";

export default function MainHeader() {
  return (
    <div className="flex-row main-header space-evenly">
      <div className="main-header-text flex-column">
        <h1 className="main-header-title">
          Saving Animals.
          <br />
          Changing Lives.
        </h1>
        <p>
          Lorem ipsum dolor sit amet. Eos cupiditate voluptates ut commodi
          impedit id quaerat magnam est necessitatibus repellat. Et doloribus
          unde ea rerum soluta sit velit perferendis aut ipsa aspernatur.
        </p>
      </div>
      <div>
        {data.headerImage.map((headerImage, index) => {
          return (
            <div key={index} className="main-header-img">
              <img
                className="main-header-img"
                src={headerImage.image}
                alt="cat"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
