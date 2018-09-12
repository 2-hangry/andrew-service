import React, { Component } from 'react';
import PhotoCarousel from './PhotoCarousel';

export default class PhotoCarouselContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictureIdx: 0,
      defaultFocusState: true,
    };

    this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this);
    this.handleRightButtonClick = this.handleRightButtonClick.bind(this);
    this.changeFocusState = this.changeFocusState.bind(this);
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

    if (pictureIdx + 2 < data.photos.length - 1) {
      this.setState({
        pictureIdx: pictureIdx + 1,
      });
    }
  }

  changeFocusState() {
    const { defaultFocusState } = this.state;

    this.setState({
      defaultFocusState: !defaultFocusState,
    });
  }

  render() {
    const { data } = this.props;
    const { pictureIdx, defaultFocusState } = this.state;

    if (data === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <PhotoCarousel
        pictureIdx={pictureIdx}
        data={data}
        focusState={defaultFocusState}
        changeFocusState={this.changeFocusState}
        handleLeftButtonClick={this.handleLeftButtonClick}
        handleRightButtonClick={this.handleRightButtonClick}
      />
    );
  }
}
