import React, {useState} from "react";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

export default function SlideImages({slides}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={slide.image} alt="cat walking" width="100%" />
            )}
          </div>
        );
      })}
      <GrFormNext className="next-slider-button" onClick={() => nextSlide()} />
      <GrFormPrevious
        className="prev-slider-button"
        onClick={() => prevSlide()}
      />
    </div>
  );
}
