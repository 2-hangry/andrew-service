import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../../../client/src/components/App';
import PhotoCarousel from '../../../client/src/components/PhotoCarousel';

describe('<PhotoCarousel />', () => {
  it('should render without crashing', () => {
    shallow(<PhotoCarousel />);
  });

  it('should increase the picture index when the right button is pressed', () => {
    const wrapper = <PhotoCarousel />;

    expect(wrapper.props().pictureIdx).toEqual(0);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');
  });
});
