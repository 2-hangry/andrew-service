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
  showModal,
}) => {
  const { photos, users } = data;

  const pluckUserInfoForPhoto = (userList, photo) => {
    const userId = photo.imageUploaderId;

    const idxOfPhotoUploader = userList.findIndex(user => user.id === userId);

    return userList[idxOfPhotoUploader];
  };

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
        <CarouselPicture
          showModal={showModal}
          user={pluckUserInfoForPhoto(users, photos[pictureIdx])}
          photo={photos[pictureIdx]}
        />
        <CarouselPicture
          showModal={showModal}
          focusState={focusState}
          user={pluckUserInfoForPhoto(users, photos[pictureIdx + 1])}
          photo={photos[pictureIdx + 1]}
        />
        <CarouselPicture
          showModal={showModal}
          user={pluckUserInfoForPhoto(users, photos[pictureIdx + 2])}
          photo={photos[pictureIdx + 2]}
        />
      </div>
      <button className={rightBtnClass} type="button" onClick={() => handleRightButtonClick()} />
    </div>
  );
};

export default PhotoCarousel;
