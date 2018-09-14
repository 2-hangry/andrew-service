import React from 'react';
import classNames from 'classnames';

const CarouselPicture = ({ photo, focusState }) => {
  const pictureContainerClass = classNames('carouselPhotoContainer');
  const pictureClass = classNames({
    carouselPhoto: true,
    hover: true,
    focus: focusState,
  });

  return (
    <div className={pictureContainerClass}>
      <img className={pictureClass} src={photo.imageUrl} alt="business food or service" />
    </div>
  );
};

export default CarouselPicture;
