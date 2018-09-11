import React, { Component } from 'react';
import CarouselPicture from './CarouselPicture';

export default class PhotoCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureIdx: 0,
    };

    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
  }

  handleLeftButtonClick() {
    const { pictureIdx } = this.state;

    if (pictureIdx > 0) {
      this.setState({
        pictureIdx: pictureIdx - 1,
      });
    }
  }

  handleRightButtonClick() {
    const { pictureIdx } = this.state;
    const { data } = this.props;

    if (pictureIdx + 2 < data.photos.length) {
      this.setState({
        pictureIdx: pictureIdx + 1,
      });
    }
  }

  render() {
    const { data } = this.props;
    const { pictureIdx } = this.state;

    return (
      <div>
        <button type="button" id="left-button" onClick={() => this.handleLeftButtonClick()} />
        <CarouselPicture picture={pictureIdx} data={data} />
        <CarouselPicture picture={pictureIdx + 1} data={data} />
        <CarouselPicture picture={pictureIdx + 2} data={data} />
        <button type="button" id="right-button" onClick={() => this.handleRightButtonClick()} />
      </div>
    );
  }
}
