import React, { Component } from 'react';
import ModalPictureContainer from './ModalPicture';
import ModalInfoContainer from './ModalInfoContainer';

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

    console.log('called');
  }

  handleLeftArrowClick() {
    let { pictureIdx } = this.state;

    if (pictureIdx > 0) {
      this.setState({ pictureIdx: (pictureIdx -= 1) });
    }

    console.log('called');
  }

  render() {
    const { pictureIdx } = this.state;
    const {
      isDisplayed, hideModal, data, url,
    } = this.props;

    if (!isDisplayed) {
      return null;
    }
    return (
      <div>
        <div id="backDrop" onClick={hideModal} />
        <div id="modal">
          <ModalPictureContainer
            photo={data.photos[pictureIdx]}
            handleRightArrowClick={this.handleRightArrowClick}
            handleLeftArrowClick={this.handleLeftArrowClick}
            url={url}
            pictureIdx={pictureIdx}
            photosSize={data.photos.length}
          />
          <ModalInfoContainer data={data} />
        </div>
      </div>
    );
  }
}
