import React from 'react';
import ModalPictureBanner from './ModalPictureBanner';
import { ModalPictureBox, LeftModalBtn, RightModalBtn } from './styles/modalPictureStyles';

const ModalPicture = ({
  photo,
  handleRightArrowClick,
  handleLeftArrowClick,
  updateImageReported,
  pictureIdx,
  pictureCount,
}) => (
  <ModalPictureBox>
    <LeftModalBtn pictureIdx={pictureIdx} type="button" onClick={handleLeftArrowClick} />
    <img src={photo.imageUrl} alt="user submitted" />
    <RightModalBtn
      pictureIdx={pictureIdx}
      pictureCount={pictureCount}
      type="button"
      onClick={handleRightArrowClick}
    />
    <ModalPictureBanner
      pictureCount={pictureCount}
      pictureIdx={pictureIdx}
      updateImageReported={updateImageReported}
      isReported={photo.reported}
    />
  </ModalPictureBox>
);

export default ModalPicture;
