import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoCarousel from './PhotoCarousel';

export default class PhotoCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureIdx: 0,
      defaultFocusState: true,
    };

    this.indexCarousel = this.indexCarousel.bind(this);
    this.updateCarouselData = this.updateCarouselData.bind(this);
    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.changeFocusState = this.changeFocusState.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    const { pictureIdx } = this.state;

    if (prevProps.data !== data) {
      const currentPicturePhotoId = prevProps.data.photos[pictureIdx].id;
      this.indexCarousel(currentPicturePhotoId);
    }
  }

  indexCarousel(photoId) {
    const { data } = this.props;
    const idx = data.photos.findIndex(photo => photo.id === photoId);
    this.setState({ pictureIdx: idx });
  }

  updateCarouselData(isDownsizing) {
    const { pictureIdx } = this.state;
    const { data, getData } = this.props;
    const currentPicturePhotoId = data.photos[pictureIdx].id;

    if (pictureIdx / (data.photos.length - 1) > 0.85) {
      getData('carousel', currentPicturePhotoId);
    }
    if (pictureIdx / (data.photos.length - 1) < 0.15 && isDownsizing) {
      getData('carousel', currentPicturePhotoId);
    }
  }

  handleLeftButtonClick() {
    const { pictureIdx } = this.state;
    const { updatePhotoCountPosition } = this.props;

    if (pictureIdx > 0) {
      this.setState({ pictureIdx: pictureIdx - 1 }, () => this.updateCarouselData(true));
      updatePhotoCountPosition();
    }
  }

  handleRightButtonClick() {
    const { pictureIdx } = this.state;
    const { data, updatePhotoCountPosition } = this.props;

    if (pictureIdx + 2 < data.photos.length - 1) {
      this.setState({ pictureIdx: pictureIdx + 1 }, () => this.updateCarouselData());
      updatePhotoCountPosition(true);
    }
  }

  changeFocusState() {
    const { defaultFocusState } = this.state;

    this.setState({ defaultFocusState: !defaultFocusState });
  }

  render() {
    const { data, showModal } = this.props;
    const { pictureIdx, defaultFocusState } = this.state;

    return (
      <PhotoCarousel
        pictureIdx={pictureIdx}
        data={data}
        focusState={defaultFocusState}
        changeFocusState={this.changeFocusState}
        handleLeftButtonClick={this.handleLeftButtonClick}
        handleRightButtonClick={this.handleRightButtonClick}
        showModal={showModal}
      />
    );
  }
}

PhotoCarouselContainer.defaultProps = {
  data: undefined,
};

PhotoCarouselContainer.propTypes = {
  data: PropTypes.instanceOf(Object),
  getData: PropTypes.func.isRequired,
  updatePhotoCountPosition: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};
