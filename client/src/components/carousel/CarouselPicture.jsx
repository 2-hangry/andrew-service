import React from 'react';
import classNames from 'classnames';
import CarouselPictureBanner from './CarouselPictureBanner';

const CarouselPicture = ({
  photo, focusState, user, showModal,
}) => {
  const pictureContainerClass = classNames({
    carouselPhotoContainer: true,
    focus: focusState,
  });

  return (
    <div className="carouselPhotoGrid">
      <div className={pictureContainerClass} onClick={showModal}>
        <img className="carouselPhoto" src={photo.imageUrl} alt="business food or service" />
        <CarouselPictureBanner user={user} photo={photo} />
      </div>
    </div>
  );
};

export default CarouselPicture;
