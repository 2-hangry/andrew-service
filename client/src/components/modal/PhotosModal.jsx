import React from 'react';
import ModalPictureContainer from './ModalPictureContainer';
import ModalInfoContainer from './ModalInfoContainer';

const PhotosModal = ({ isDisplayed, hideModal, data }) => {
  if (!isDisplayed) {
    return null;
  }
  return (
    <div id="backDrop" onClick={() => hideModal()}>
      <div id="modal">
        <ModalPictureContainer data={data} />
        <ModalInfoContainer data={data} />
      </div>
    </div>
  );
};

export default PhotosModal;
