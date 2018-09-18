import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './carousel/PhotoCarouselContainer';
import PhotosModal from './modal/PhotosModal';
import { BizSwitch, AppWrapper } from './carouselAppStyles';

export default class CarouselApp extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3000';

    this.state = {
      modalIsDisplayed: false,
      modalIdx: 0,
    };

    this.changeDisplayedBusiness = this.changeDisplayedBusiness.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
    this.handleModalRightArrowClick = this.handleModalRightArrowClick.bind(this);
    this.handleModalLeftArrowClick = this.handleModalLeftArrowClick.bind(this);
  }

  componentDidMount() {
    this.getBusinessData();
  }

  getBusinessData(id = 1) {
    axios
      .get(`${this.url}/businesses/${id}/images`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(err => console.error(err));
  }

  changeDisplayedBusiness(id) {
    this.setState({ data: this.getBusinessData(id) });
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
        <BizSwitch>
          <input id="businessId" type="number" min="1" max="100" defaultValue="1" />
          <button
            type="button"
            onClick={() => this.changeDisplayedBusiness(document.getElementById('businessId').value)
            }
          >
            Go to business
          </button>
        </BizSwitch>
        <PhotoCarouselContainer data={data} showModal={this.showPhotosModal} />
        <PhotosModal
          isDisplayed={modalIsDisplayed}
          hideModal={this.hidePhotosModal}
          handleRightArrowClick={this.handleModalRightArrowClick}
          handleLeftArrowClick={this.handleModalLeftArrowClick}
          pictureIdx={modalIdx}
          data={data}
          url={this.url}
        />
      </AppWrapper>
    );
  }
}
