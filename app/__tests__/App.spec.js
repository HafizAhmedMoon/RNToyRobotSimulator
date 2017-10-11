import React from 'react';
import 'react-native';

import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("App Component", () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <App/>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
