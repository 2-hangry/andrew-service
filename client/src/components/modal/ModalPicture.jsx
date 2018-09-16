import React from 'react';
import classNames from 'classnames';

const ModalPicture = ({
  photo,
  handleRightArrowClick,
  handleLeftArrowClick,
  updateImageReported,
  pictureIdx,
  photosSize,
}) => {
  const leftButtonClass = classNames({
    modalPictureButton: true,
    leftModalButton: true,
    end: pictureIdx === 0,
  });
  const rightButtonClass = classNames({
    modalPictureButton: true,
    rightModalButton: true,
    end: pictureIdx === photosSize - 1,
  });

  return (
    <div className="modalPicture">
      <button className={leftButtonClass} type="button" onClick={handleLeftArrowClick} />
      <img src={photo.imageUrl} alt="user submitted" />
      <button className={rightButtonClass} type="button" onClick={handleRightArrowClick} />
    </div>
  );
};

export default ModalPicture;
