import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './carousel/PhotoCarouselContainer';
import PhotosModal from './modal/PhotosModal';
import { BizSwitch, AppWrapper } from './appStyles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3000';

    this.state = { modalIsDisplayed: false };

    this.changeDisplayedBusiness = this.changeDisplayedBusiness.bind(this);
    this.showPhotosModal = this.showPhotosModal.bind(this);
    this.hidePhotosModal = this.hidePhotosModal.bind(this);
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

  showPhotosModal() {
    this.setState({ modalIsDisplayed: true });
  }

  hidePhotosModal() {
    this.setState({ modalIsDisplayed: false });
  }

  render() {
    const { data, modalIsDisplayed } = this.state;

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
          data={data}
          url={this.url}
        />
      </AppWrapper>
    );
  }
}
