import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RobotSimulator from '../RobotSimulator';

const mockStore = configureStore();

const initialState = {
  robot: {},
};

describe("App Component", () => {
  it('renders as expected', () => {
    const tree = shallow(
      <RobotSimulator/>, {
        context: {store: mockStore(initialState)}
      }
    );
    expect(tree.dive()).toMatchSnapshot();
  });
});
