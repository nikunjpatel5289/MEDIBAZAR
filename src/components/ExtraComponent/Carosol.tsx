import React, { useState } from "react";

interface Image {
  src?: string | "";
  alt?: string | "prioductImages...";
}

interface prop {
  images: any;
}

const Carosol = ({ images }: prop) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    // console.info("prev", activeIndex, images.length);
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    // console.info("next", activeIndex, images.length);
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {images?.map((image: any, index: any) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            {/*belo class w-100 */}
            <img
              className="d-block"
              height={"25%"}
              width={"750px"}
              src={image}
              // alt={image?.alt}
            />
          </div>
        ))}
      </div>
      <button
        className="m-auto rounded hover:bg-slate-600 carousel-control-prev h-10 bg-slate-700"
        // href="#carouselExampleControls"
        // role="button"
        data-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="m-auto rounded h-10 hover:bg-slate-600 carousel-control-next bg-slate-700"
        // href="#carouselExampleControls"
        // role="button"
        data-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
};

export default Carosol;
