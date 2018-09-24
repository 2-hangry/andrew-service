import React from 'react';
import PropTypes from 'prop-types';
import ModalPictureBanner from './ModalPictureBanner';
import { ModalPictureBox, LeftModalBtn, RightModalBtn } from './styles/modalPictureStyles';

const ModalPicture = ({
  photo,
  handleRightArrowClick,
  handleLeftArrowClick,
  updateImageReported,
  pictureIdx,
  photosCount,
  photoCountPosition,
  listSize,
}) => (
  <ModalPictureBox>
    <LeftModalBtn pictureIdx={pictureIdx} type="button" onClick={handleLeftArrowClick} />
    <img src={photo.imageUrl} alt="user submitted" />
    <RightModalBtn
      pictureIdx={pictureIdx}
      listSize={listSize}
      type="button"
      onClick={handleRightArrowClick}
    />
    <ModalPictureBanner
      photosCount={photosCount}
      photoCountPosition={photoCountPosition}
      updateImageReported={updateImageReported}
      isReported={photo.reported}
      photoId={photo.id}
    />
  </ModalPictureBox>
);

export default ModalPicture;

ModalPicture.propTypes = {
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
  updateImageReported: PropTypes.func.isRequired,
  pictureIdx: PropTypes.number.isRequired,
  photosCount: PropTypes.number.isRequired,
  photoCountPosition: PropTypes.number.isRequired,
  listSize: PropTypes.number.isRequired,
  photo: PropTypes.shape({
    imageId: PropTypes.number,
    businessId: PropTypes.number,
    imageUploaderId: PropTypes.number,
    imageUrl: PropTypes.string,
    imageUploadDate: PropTypes.string,
    imageComment: PropTypes.string,
    helpfulCount: PropTypes.number,
    reported: PropTypes.number,
  }).isRequired,
};
