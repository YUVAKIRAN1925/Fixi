import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const AutoScrollSlider = ({ image1, image2, image3, image4, image5, image6 }) => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  const autoScrollInterval = 1000; // Adjust the auto-scroll interval in milliseconds

  const duplicatedImages = [...images, ...images ,...images]; // Duplicate images to enable continuous looping

  const splideRef = useRef(null);

  useEffect(() => {
    const splide = splideRef.current.splide;

    const intervalId = setInterval(() => {
      if (splide) {
        splide.go('+'); // Scroll to the right
      }
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [autoScrollInterval]);

  return (
    <Splide
      options={{
        type: 'slide',
        rewind: true,
        perPage: 4, // Adjust according to your needs
        autoWidth: false, // Set to true to adjust container width based on images
        gap: 10, // Adjust according to your needs
        pagination: false, // Hide pagination dots
        arrows: false, // Hide navigation arrows
        autoplay: false, // Autoplay is handled using useEffect
        loop : true,
        onmouseover : true
      }}
      ref={splideRef}
    >
      {duplicatedImages.map((image, index) => (
        <SplideSlide key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className='rounded-2'/>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default AutoScrollSlider;
