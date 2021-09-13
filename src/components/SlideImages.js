import React, {useState} from "react";
import data from "../data";

export default function SlideImages({slides}) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current + 1);
  };

  return (
    <div>
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={slide.image} alt="cat walking" width="400px" />
            )}
          </div>
        );
      })}
      <button onClick={() => nextSlide()}>next</button>
      <button onClick={() => prevSlide()}>prev</button>
    </div>
  );
}
