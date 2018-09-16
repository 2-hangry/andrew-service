import React, { Component } from 'react';
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
