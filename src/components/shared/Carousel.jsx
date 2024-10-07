import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Carousel({ images }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);
  var settings = {
    dots: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //arrows are hidden by default
    arrows: false,
  };
  return (
    <Slider {...settings} className='h-[250px] md:h-[50vh]  md:w-[50vw] '>
      {images.map((image, index) => (
        <div key={index} className='h-full w-full over '>
          <img
            src={image}
            className='h-[250px] md:h-[50vh] md:w-[50vw] object-cover'
          />
        </div>
      ))}
    </Slider>
  );
}
