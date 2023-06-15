import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import AptMock from '../AptMock';
import '../styling/ApartmentProtectedIndex.css';

const ApartmentProtectedIndex = ({ apartments }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === apartments.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? apartments.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = apartments.map((apartment, index) => (
    <CarouselItem
      key={apartment.id}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      active={index === activeIndex}
    >
      <div className="apartment-card">
        <h5 className="apt-st">{apartment.street}</h5>
        <p className="apt-loctn">{apartment.city}, {apartment.state}</p>
        <p className="apt-details">Square Footage: {apartment.square_footage} sq. ft.</p>
        <p className="apt-details">Price: {apartment.price}</p>
        <p className="apt-details">Bedrooms: {apartment.bedrooms}</p>
        <p className="apt-details">Bathrooms: {apartment.bathrooms}</p>
        <p className="apt-details">Pets: {apartment.pets}</p>
        <img className="apt-img" src={process.env.PUBLIC_URL + apartment.image}  alt="Apartment" />
      </div>
    </CarouselItem>
  ));

  return (
    <div className="apartment-carousel">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={apartments} activeIndex={activeIndex} onClickHandler={setActiveIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

ApartmentProtectedIndex.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default ApartmentProtectedIndex;
