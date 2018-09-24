import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ModalPicture from './ModalPicture';
import ModalInfo from './ModalInfo';
import { BackDrop, Modal } from './styles/photosModalStyles';
import { PhotosPreLoader } from '../carouselAppStyles';

export default class PhotosModalContainer extends Component {
  constructor(props) {
    super(props);

    this.updateImageReported = this.updateImageReported.bind(this);
    this.updateHelpfulCount = this.updateHelpfulCount.bind(this);
  }

  updateImageReported(photoId) {
    const { getData } = this.props;
    axios
      .post(`/api${window.location.pathname}images/${photoId}/report`)
      .then(() => {
        getData('modal', photoId);
      })
      .catch(err => console.error(err));
  }

  updateHelpfulCount(photoId, voted) {
    const { getData } = this.props;

    if (!voted) {
      axios
        .post(`/api${window.location.pathname}images/${photoId}/helpful`)
        .then(() => {
          getData('modal', photoId);
        })
        .catch(err => console.error(err));
    }
  }

  render() {
    const {
      isDisplayed,
      handleLeftArrowClick,
      handleRightArrowClick,
      hideModal,
      pictureIdx,
      photosCount,
      photoCountPosition,
      data,
    } = this.props;

    const pluckUserInfoForPhoto = ({ users }, targetPhoto) => {
      const userId = targetPhoto.imageUploaderId;
      const idxOfPhotoUploader = users.findIndex(user => user.id === userId);
      return users[idxOfPhotoUploader];
    };

    if (isDisplayed === false) {
      return null;
    }

    if (data === undefined) {
      return null;
    }

    return (
      <div>
        <BackDrop onClick={hideModal} />
        <Modal>
          <ModalPicture
            photo={data.photos[pictureIdx]}
            handleRightArrowClick={handleRightArrowClick}
            handleLeftArrowClick={handleLeftArrowClick}
            updateImageReported={this.updateImageReported}
            pictureIdx={pictureIdx}
            photosCount={photosCount}
            photoCountPosition={photoCountPosition}
            listSize={data.photos.length}
          />
          <ModalInfo
            photo={data.photos[pictureIdx]}
            user={pluckUserInfoForPhoto(data, data.photos[pictureIdx])}
            updateHelpful={this.updateHelpfulCount}
          />
        </Modal>
        <PhotosPreLoader>
          {data.photos.map(photo => (
            <img key={photo.id} src={photo.imageUrl} alt="pre-loaded non-display" />
          ))}
        </PhotosPreLoader>
      </div>
    );
  }
}

PhotosModalContainer.defaultProps = {
  data: undefined,
};

PhotosModalContainer.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  getData: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
  pictureIdx: PropTypes.number.isRequired,
  photosCount: PropTypes.number.isRequired,
  photoCountPosition: PropTypes.number.isRequired,
  data: PropTypes.shape({
    photos: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    business: PropTypes.array.isRequired,
  }),
};
