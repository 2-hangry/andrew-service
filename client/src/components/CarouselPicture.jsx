import React from 'react';

const PictureCarousel = ({ picture, data }) => (
  <div>
    <img src={data.photos[picture].imageUrl} alt="business food or service" />
  </div>
);

export default PictureCarousel;
