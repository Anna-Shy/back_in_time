import React, { useCallback, useEffect, useRef, useState } from "react";

import arrowIcon from "../../source/svg/icons/arrow-down.svg";

import "./carousel.scss";

// horizontal list with native scroll (swipe / trackpad) and arrow buttons
export const Carousel = ({ children, label }) => {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    updateArrows();

    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scroll = (direction) => {
    const track = trackRef.current;
    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="carousel" role="region" aria-label={label}>
      <button
        className="carousel__arrow carousel__arrow-prev"
        onClick={() => scroll(-1)}
        disabled={!canPrev}
        aria-label="Previous"
      >
        <img src={arrowIcon} alt="" />
      </button>

      <ul className="carousel__track" ref={trackRef}>
        {React.Children.map(children, (child) => (
          <li className="carousel__slide">{child}</li>
        ))}
      </ul>

      <button
        className="carousel__arrow carousel__arrow-next"
        onClick={() => scroll(1)}
        disabled={!canNext}
        aria-label="Next"
      >
        <img src={arrowIcon} alt="" />
      </button>
    </div>
  );
};
