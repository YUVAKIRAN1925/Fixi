import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const RelatedComapaniesScroll = ({ companies }) => {
  const autoScrollInterval = 3000; // Adjust the auto-scroll interval in milliseconds
  const splideRef = useRef(null);

  useEffect(() => {
    const splideInstance = splideRef.current.splide;

    const intervalId = setInterval(() => {
      if (splideInstance) {
        splideInstance.go('+'); // Scroll to the right
      }
    }, autoScrollInterval);

    return () => clearInterval(intervalId);
  }, [autoScrollInterval]);

  const handleClick = () => {
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
  }

  const duplicatedCompanies = [...companies, ...companies];

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
      {duplicatedCompanies.map((company, index) => (
        <SplideSlide key={index}>
          <Link to={company.redirect} onClick={handleClick}>
            <img src={company.description_image} alt={company.name} className='rounded-2'/>
          <p className="text-center text-dark p-2">{company.name}</p>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default RelatedComapaniesScroll;

