// Carousel.jsx
import React from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Carousel = ({advertising}) => {
  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        interval: 3000, // Change slide every 3 seconds
        pauseOnHover: false,
        arrows: false,
        pagination: false,
      }}
    >
      <SplideSlide>
        <img src={advertising.advertisement1} alt="Ad 1" className='image-carousel'/>
      </SplideSlide>
      <SplideSlide>
        <img src={advertising.advertisement2} alt="Ad 2" className='image-carousel'/>
      </SplideSlide>
      <SplideSlide>
        <img src={advertising.advertisement3} alt="Ad 3" className='image-carousel'/>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;

