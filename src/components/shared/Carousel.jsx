import React from "react";
import Slider from "react-slick";

export default function Carousel({ images }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className='h-[50vh] w-[50vw]'>
      {images.map((image, index) => (
        <div key={index} className='h-full w-full over'>
          <img src={image} className='h-[50vh] w-[50vw] object-cover' />
        </div>
      ))}
    </Slider>
  );
}
