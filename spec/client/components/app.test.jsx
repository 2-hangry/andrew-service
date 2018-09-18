import React from 'react';
import { mount } from 'enzyme';

import App from '../../../client/src/components/App';

describe('<App />', () => {
  it('should render without crashing', () => {
    mount(<App />);
  });
});

// sorry i got stuck on a bunch of bugs trying to get jest and enzyme set up. I will get more tests written asap tomorrow now that its all working
