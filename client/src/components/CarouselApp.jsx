import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './carousel/PhotoCarouselContainer';
import PhotosModalContainer from './modal/PhotosModalContainer';
import { AppWrapper, PhotosPreLoader } from './carouselAppStyles';

export default class CarouselApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselData: undefined,
      modalData: undefined,
      photosCount: 0,
      photoCountPosition: 1,
      photoCountPositionRestore: 0,
      modalIsDisplayed: false,
      modalIdx: 0,
    };

    this.indexModal = this.indexModal.bind(this);
    this.updatePhotoCountPosition = this.updatePhotoCountPosition.bind(this);
    this.getBusinessData = this.getBusinessData.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.updateModalData = this.updateModalData.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
  }

  componentDidMount() {
    this.getBusinessData('carousel');
    axios
      .get(`/api${window.location.pathname}images/count`)
      .then((response) => {
        if (this.isUnmounted) {
          return;
        }
        this.setState({ photosCount: response.data.total });
      })
      .catch(err => console.error(err));
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  getBusinessData(dataGroupSelector, currentDisplayedPhotoId = 1) {
    axios
      .get(`/api${window.location.pathname}images/${currentDisplayedPhotoId}`)
      .then((response) => {
        if (this.isUnmounted) {
          return;
        }
        if (dataGroupSelector === 'modal') {
          this.setState(
            {
              modalData: response.data,
            },
            () => this.indexModal(currentDisplayedPhotoId),
          );
        }
        if (dataGroupSelector === 'carousel') {
          this.setState({ carouselData: response.data });
        }
      })
      .catch(err => console.error(err));
  }

  indexModal(photoId) {
    const { modalData } = this.state;

    const idx = modalData.photos.findIndex(photo => photo.id === photoId);
    this.setState({ modalIdx: idx });
  }

  showPhotosModal(photoId, ajuster = 0) {
    const { carouselData, photoCountPosition } = this.state;

    this.setState(
      {
        modalIsDisplayed: true,
        modalData: carouselData,
        photoCountPosition: photoCountPosition + ajuster,
        photoCountPositionRestore: photoCountPosition,
      },
      () => this.indexModal(photoId),
    );
  }

  hidePhotosModal() {
    const { photoCountPositionRestore } = this.state;
    this.setState({ modalIsDisplayed: false, photoCountPosition: photoCountPositionRestore });
  }

  updateModalData(isDownsizing) {
    const {
      modalData, modalIdx, photoCountPosition, photosCount,
    } = this.state;
    const currentModalPhotoId = modalData.photos[modalIdx].id;

    if (photosCount < 15) {
      return;
    }
    if (modalIdx / (modalData.photos.length - 1) > 0.85) {
      this.getBusinessData('modal', currentModalPhotoId);
    }
    if (
      modalIdx / (modalData.photos.length - 1) < 0.15
      && isDownsizing
      && photoCountPosition > 10
    ) {
      this.getBusinessData('modal', currentModalPhotoId);
    }
  }

  updatePhotoCountPosition(isIncreasing) {
    const { photoCountPosition } = this.state;
    let direction = -1;
    if (isIncreasing) {
      direction = 1;
    }
    this.setState({ photoCountPosition: photoCountPosition + direction });
  }

  handleModalRightArrowClick() {
    const { modalIdx, modalData } = this.state;

    if (modalIdx < modalData.photos.length - 1) {
      this.setState(
        {
          modalIdx: modalIdx + 1,
        },
        () => this.updateModalData(),
      );
      this.updatePhotoCountPosition(true);
    }
  }

  handleModalLeftArrowClick() {
    const { modalIdx } = this.state;

    if (modalIdx > 0) {
      this.setState(
        {
          modalIdx: modalIdx - 1,
        },
        () => this.updateModalData(true),
      );
      this.updatePhotoCountPosition();
    }
  }

  render() {
    const {
      modalData,
      carouselData,
      modalIsDisplayed,
      modalIdx,
      photosCount,
      photoCountPosition,
    } = this.state;

    if (carouselData === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <AppWrapper>
        <PhotoCarouselContainer
          data={carouselData}
          showModal={this.showPhotosModal}
          getData={this.getBusinessData}
          updatePhotoCountPosition={this.updatePhotoCountPosition}
        />
        <PhotosModalContainer
          getData={this.getBusinessData}
          hideModal={this.hidePhotosModal}
          handleRightArrowClick={this.handleModalRightArrowClick}
          handleLeftArrowClick={this.handleModalLeftArrowClick}
          isDisplayed={modalIsDisplayed}
          pictureIdx={modalIdx}
          photosCount={photosCount}
          photoCountPosition={photoCountPosition}
          data={modalData}
        />
        <PhotosPreLoader>
          {carouselData.photos.map(photo => (
            <img key={photo.id} src={photo.imageUrl} alt="pre-loaded non-display" />
          ))}
        </PhotosPreLoader>
      </AppWrapper>
    );
  }
}
