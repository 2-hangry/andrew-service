import React from 'react';
import { mount, shallow } from 'enzyme';

import testData from '../../testData';
import PhotoCarouselContainer from '../../../client/src/components/carousel/PhotoCarouselContainer';

describe('<PhotoCarouselContainer />', () => {
  it('should render without crashing', () => {
    shallow(<PhotoCarouselContainer data={testData} />);
  });

  it('should increase the picture index when the right button is pressed', () => {
    const wrapper = mount(<PhotoCarouselContainer data={testData} />);

    expect(wrapper.state().pictureIdx).toEqual(0);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(wrapper.state().pictureIdx).toEqual(1);
  });

  it('should decrease the picture index when the left button is pressed', () => {
    const wrapper = mount(<PhotoCarouselContainer data={testData} />);

    expect(wrapper.state().pictureIdx).toEqual(0);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(wrapper.state().pictureIdx).toEqual(0);
  });

  it('should not decrease the picture index below 0', () => {
    const wrapper = mount(<PhotoCarouselContainer data={testData} />);

    expect(wrapper.state().pictureIdx).toEqual(0);

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(wrapper.state().pictureIdx).toEqual(0);
  });

  it('should not increase the picture index above the size of the photos array minus 2 (accounting for 3 photos in the carousel)', () => {
    const wrapper = mount(<PhotoCarouselContainer data={testData} />);

    expect(wrapper.state().pictureIdx).toEqual(0);

    for (let i = 0; i < 15; i += 1) {
      wrapper
        .find('button')
        .at(1)
        .simulate('click');
    }

    expect(wrapper.state().pictureIdx).toEqual(7);
  });
});
