import React from 'react';
import PropTypes from 'prop-types';
import ModalPictureContainer from './ModalPictureContainer';
import ModalInfo from './ModalInfo';
import { BackDrop, Modal } from './styles/photosModalStyles';

const PhotosModal = ({
  isDisplayed,
  handleLeftArrowClick,
  handleRightArrowClick,
  hideModal,
  pictureIdx,
  data,
}) => {
  const pluckUserInfoForPhoto = ({ users }, targetPhoto) => {
    const userId = targetPhoto.imageUploaderId;
    const idxOfPhotoUploader = users.findIndex(user => user.id === userId);
    return users[idxOfPhotoUploader];
  };

  if (isDisplayed === false) {
    return null;
  }

  return (
    <div>
      <BackDrop onClick={hideModal} />
      <Modal>
        <ModalPictureContainer
          photo={data.photos[pictureIdx]}
          handleRightArrowClick={handleRightArrowClick}
          handleLeftArrowClick={handleLeftArrowClick}
          pictureIdx={pictureIdx}
          pictureCount={data.photos.length}
        />
        <ModalInfo
          photo={data.photos[pictureIdx]}
          user={pluckUserInfoForPhoto(data, data.photos[pictureIdx])}
        />
      </Modal>
    </div>
  );
};
export default PhotosModal;

PhotosModal.defaultProps = {
  data: undefined,
};

PhotosModal.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
  pictureIdx: PropTypes.number.isRequired,
  data: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    business: PropTypes.array.isRequired,
  }),
};
