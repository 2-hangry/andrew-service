import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ModalPicture from './ModalPicture';

export default class ModalPictureContainer extends Component {
  constructor(props) {
    super(props);

    this.updateImageReported = this.updateImageReported.bind(this);
  }

  updateImageReported() {
    const { url, photo } = this.props;
    axios
      .post(`${url}/images/${photo.id}/report`)
      .then(() => {})
      .catch(err => console.error(err));
  }

  render() {
    const {
      photo,
      handleRightArrowClick,
      handleLeftArrowClick,
      pictureIdx,
      pictureCount,
    } = this.props;

    return (
      <ModalPicture
        photo={photo}
        handleRightArrowClick={handleRightArrowClick}
        handleLeftArrowClick={handleLeftArrowClick}
        updateImageReported={this.updateImageReported}
        pictureIdx={pictureIdx}
        pictureCount={pictureCount}
      />
    );
  }
}

ModalPictureContainer.propTypes = {
  handleLeftArrowClick: PropTypes.func.isRequired,
  handleRightArrowClick: PropTypes.func.isRequired,
  pictureIdx: PropTypes.number.isRequired,
  pictureCount: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
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
