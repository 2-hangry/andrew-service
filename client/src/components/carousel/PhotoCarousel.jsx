import React from 'react';
import PropTypes from 'prop-types';
import CarouselPicture from './CarouselPicture';
import {
  PhotoCarouselBox,
  LeftCarouselBtn,
  RightCarouselBtn,
  CarouselPhotos,
} from './styles/photoCarouselStyles';

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

  return (
    <PhotoCarouselBox onMouseEnter={changeFocusState} onMouseLeave={changeFocusState}>
      <LeftCarouselBtn pictureIdx={pictureIdx} type="button" onClick={handleLeftButtonClick} />
      <CarouselPhotos>
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
      </CarouselPhotos>
      <RightCarouselBtn
        type="button"
        listSize={data.photos.length - 3}
        pictureIdx={pictureIdx}
        onClick={handleRightButtonClick}
      />
    </PhotoCarouselBox>
  );
};

export default PhotoCarousel;

PhotoCarousel.propTypes = {
  pictureIdx: PropTypes.number.isRequired,
  handleLeftButtonClick: PropTypes.func.isRequired,
  handleRightButtonClick: PropTypes.func.isRequired,
  changeFocusState: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  focusState: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};
