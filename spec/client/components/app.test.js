import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../../client/src/components/App';

describe('<App />', () => {
  it('should render without crashing', () => {
    mount(<App />);
  });
});
