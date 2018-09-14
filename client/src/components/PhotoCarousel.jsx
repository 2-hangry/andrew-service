import React from 'react';
import classNames from 'classnames';
import CarouselPicture from './CarouselPicture';

const PhotoCarousel = ({
  pictureIdx,
  data,
  handleLeftButtonClick,
  handleRightButtonClick,
  focusState,
  changeFocusState,
}) => {
  const leftBtnClass = classNames({
    leftCarouselBtn: true,
    carouselBtn: true,
    end: pictureIdx === 0,
  });
  const rightBtnClass = classNames({
    rightCarouselBtn: true,
    carouselBtn: true,
    end: pictureIdx === data.photos.length - 3,
  });

  return (
    <div
      id="photoCarousel"
      onMouseEnter={() => changeFocusState()}
      onMouseLeave={() => changeFocusState()}
    >
      <button className={leftBtnClass} type="button" onClick={() => handleLeftButtonClick()} />
      <div id="carouselPhotos">
        <CarouselPicture photo={data.photos[pictureIdx]} />
        <CarouselPicture focusState={focusState} photo={data.photos[pictureIdx + 1]} />
        <CarouselPicture photo={data.photos[pictureIdx + 2]} />
      </div>
      <button className={rightBtnClass} type="button" onClick={() => handleRightButtonClick()} />
    </div>
  );
};

export default PhotoCarousel;
