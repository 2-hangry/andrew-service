import axios from 'axios';
import React, { Component } from 'react';
import PhotoCarouselContainer from './PhotoCarouselContainer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    axios
      .get(window.location.url)
      .then((response) => {
        this.setState({
          data: response,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { data } = this.state;

    return <PhotoCarouselContainer data={data} />;
  }
}
