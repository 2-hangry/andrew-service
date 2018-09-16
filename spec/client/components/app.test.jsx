import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../../../client/src/components/App';

describe('<App />', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  it('should render itself and all of its child components without crashing', () => {
    mount(<App />);
  });
});
