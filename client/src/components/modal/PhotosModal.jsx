import React, { Component } from 'react';
import ModalPictureContainer from './ModalPictureContainer';
import ModalInfo from './ModalInfo';
import { BackDrop, Modal } from './styles/photosModalStyles';

export default class PhotosModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureIdx: 0,
    };

    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
  }

  handleRightArrowClick() {
    let { pictureIdx } = this.state;
    const { data } = this.props;

    if (pictureIdx < data.photos.length - 1) {
      this.setState({ pictureIdx: (pictureIdx += 1) });
    }
  }

  handleLeftArrowClick() {
    let { pictureIdx } = this.state;

    if (pictureIdx > 0) {
      this.setState({ pictureIdx: (pictureIdx -= 1) });
    }
  }

  render() {
    const { pictureIdx } = this.state;

    const {
      isDisplayed, hideModal, data, url,
    } = this.props;

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
            handleRightArrowClick={this.handleRightArrowClick}
            handleLeftArrowClick={this.handleLeftArrowClick}
            url={url}
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
  }
}
