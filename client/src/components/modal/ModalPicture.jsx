import React from 'react';
import classNames from 'classnames';
import ModalPictureBanner from './ModalPictureBanner';

const ModalPicture = ({
  photo,
  handleRightArrowClick,
  handleLeftArrowClick,
  updateImageReported,
  pictureIdx,
  pictureCount,
}) => {
  const leftButtonClass = classNames({
    modalPictureButton: true,
    leftModalButton: true,
    end: pictureIdx === 0,
  });
  const rightButtonClass = classNames({
    modalPictureButton: true,
    rightModalButton: true,
    end: pictureIdx === pictureCount - 1,
  });

  return (
    <div className="modalPicture">
      <button className={leftButtonClass} type="button" onClick={handleLeftArrowClick} />
      <img src={photo.imageUrl} alt="user submitted" />
      <button className={rightButtonClass} type="button" onClick={handleRightArrowClick} />
      <ModalPictureBanner
        pictureCount={pictureCount}
        pictureIdx={pictureIdx}
        updateImageReported={updateImageReported}
        isReported={photo.reported}
      />
    </div>
  );
};

export default ModalPicture;
