import React from 'react';
import { mount, shallow } from 'enzyme';

import testData from '../../testData';
import PhotosModal from '../../../client/src/components/modal/PhotosModal';

describe('<PhotosModal />', () => {
  it('should render without crashing', () => {
    shallow(<PhotosModal data={testData} isDisplayed />);
  });

  it('should render itself and all of its child components without crashing', () => {
    mount(<PhotosModal data={testData} isDisplayed />);
  });
});
