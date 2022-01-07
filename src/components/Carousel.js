import React from "react";
import "../styles/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselTitle() {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
      <div>
        <img src="./a1.jpeg" alt="carouse1" />
      </div>
      <div>
        <img src="./a2.jpeg" alt="carouse2" />
      </div>
      <div>
        <img src="./a3.jpeg" alt="carouse3" />
      </div>
    </Carousel>
  );
}

export default CarouselTitle;
