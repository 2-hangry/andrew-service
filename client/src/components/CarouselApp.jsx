import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './carousel/PhotoCarouselContainer';
import PhotosModal from './modal/PhotosModal';
import AppWrapper from './carouselAppStyles';

export default class CarouselApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsDisplayed: false,
      modalIdx: 0,
    };

    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
  }

  componentDidMount() {
    axios
      .get(`/api${window.location.pathname}images`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(err => console.error(err));
  }

  showPhotosModal(photoId) {
    const { data } = this.state;
    const idx = data.photos.findIndex(photo => photo.id === photoId);

    this.setState({
      modalIsDisplayed: true,
      modalIdx: idx,
    });
  }

  hidePhotosModal() {
    this.setState({ modalIsDisplayed: false });
  }

  handleModalRightArrowClick() {
    const { data } = this.state;
    let { modalIdx } = this.state;

    if (modalIdx < data.photos.length - 1) {
      this.setState({ modalIdx: (modalIdx += 1) });
    }
  }

  handleModalLeftArrowClick() {
    let { modalIdx } = this.state;

    if (modalIdx > 0) {
      this.setState({ modalIdx: (modalIdx -= 1) });
    }
  }

  render() {
    const { data, modalIsDisplayed, modalIdx } = this.state;

    return (
      <AppWrapper>
        <PhotoCarouselContainer data={data} showModal={this.showPhotosModal} />
        <PhotosModal
          isDisplayed={modalIsDisplayed}
          hideModal={this.hidePhotosModal}
          handleRightArrowClick={this.handleModalRightArrowClick}
          handleLeftArrowClick={this.handleModalLeftArrowClick}
          pictureIdx={modalIdx}
          data={data}
        />
      </AppWrapper>
    );
  }
}
