import React, {useEffect, useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import data from "../data";

export default function SlideImages() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [transition, setTransition] = useState(false);

  const nextSlide = () => {
    setCurrent(current === data.slideImages.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? data.slideImages.length - 1 : current - 1);
  };

  setTimeout(() => {
    nextSlide();
  }, 10000);

  return (
    <div className="slider">
      {data.slideImages.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                height="300px"
                width="100%"
                alt="cat walking"
                className={transition ? "slider-image-slide-next" : ""}
              />
            )}
          </div>
        );
      })}
      <div className="slider-buttons">
        <GrFormPrevious
          className="prev-slider-button"
          onClick={() => prevSlide()}
        />
        <GrFormNext
          className="next-slider-button"
          onClick={() => nextSlide()}
        />
      </div>
    </div>
  );
}
