import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { RobotSimulator } from '../RobotSimulator';

describe("App Component", () => {
  it('renders correctly', () => {
    const tree = shallow(
      <RobotSimulator/>
    );
    expect(tree).toMatchSnapshot();
  });
});
