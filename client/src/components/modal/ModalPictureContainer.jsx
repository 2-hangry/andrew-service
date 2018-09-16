import React, { Component } from 'react';
import axios from 'axios';
import ModalPicture from './ModalPicture';

export default class ModalPictureContainer extends Component {
  constructor(props) {
    super(props);

    this.updatedImageReported = this.updatedImageReported.bind(this);
  }

  updatedImageReported() {
    const { url, photo } = this.props;
    axios
      .post(`${url}/images/${photo.imageId}/report`)
      .then(() => {
        photo.reported = 1;
      })
      .catch(err => console.error(err));
  }

  render() {
    const {
      photo,
      handleRightArrowClick,
      handleLeftArrowClick,
      pictureIdx,
      photosSize,
    } = this.props;

    return (
      <ModalPicture
        photo={photo}
        handleRightArrowClick={handleRightArrowClick}
        handleLeftArrowClick={handleLeftArrowClick}
        updatedImageReported={this.updatedImageReported}
        pictureIdx={pictureIdx}
        photosSize={photosSize}
      />
    );
  }
}
