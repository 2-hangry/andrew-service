import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './carousel/PhotoCarouselContainer';
import PhotosModalContainer from './modal/PhotosModalContainer';
import { AppWrapper, PhotosPreLoader } from './carouselAppStyles';

export default class CarouselApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsDisplayed: false,
      modalIdx: 0,
    };

    this.getBusinessData = this.getBusinessData.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
  }

  componentDidMount() {
    this.getBusinessData();
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  getBusinessData() {
    axios
      .get(`/api${window.location.pathname}images`)
      .then((response) => {
        if (this.isUnmounted) {
          return;
        }
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

    if (data === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <AppWrapper>
        <PhotoCarouselContainer data={data} showModal={this.showPhotosModal} />
        <PhotosModalContainer
          getData={this.getBusinessData}
          hideModal={this.hidePhotosModal}
          handleRightArrowClick={this.handleModalRightArrowClick}
          handleLeftArrowClick={this.handleModalLeftArrowClick}
          isDisplayed={modalIsDisplayed}
          pictureIdx={modalIdx}
          data={data}
        />
        <PhotosPreLoader>
          {data.photos.map(photo => (
            <img key={photo.id} src={photo.imageUrl} alt="pre-loaded non-display" />
          ))}
        </PhotosPreLoader>
      </AppWrapper>
    );
  }
}
