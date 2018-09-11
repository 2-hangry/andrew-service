import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './PhotoCarouselContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3000';

    this.state = {
      businessId: 1,
    };

    this.changeDisplayedBusiness = this.changeDisplayedBusiness.bind(this);
  }

  componentDidMount() {
    this.getBusinessData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { businessId } = this.state;

    if (businessId !== prevState.businessId) {
      this.getBusinessData();
    }
  }

  getBusinessData() {
    const { businessId } = this.state;

    axios
      .get(`${this.url}/businesses/${businessId}/images`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch(err => console.error(err));
  }

  changeDisplayedBusiness(id) {
    this.setState({
      businessId: Number(id),
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <input id="businessId" type="number" min="1" max="100" defaultValue="1" />
        <button
          type="button"
          onClick={() => this.changeDisplayedBusiness(document.getElementById('businessId').value)}
        >
          Go to business
        </button>
        <PhotoCarouselContainer data={data} />
      </div>
    );
  }
}
