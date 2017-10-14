import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import RobotSimulator from '../RobotSimulator';
import { Command } from "../../model/Command";

const mockStore = configureStore();

const initialState = {
  robot: {
    rows: 5,
    cols: 5,
    x: -1,
    y: -1,
    output: ''
  },
};

describe("RobotSimulator Component", () => {

  it('renders as expected', () => {
    const wrapper = shallow(
      <RobotSimulator/>, {
        context: {store: mockStore(initialState)}
      }
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('should receive command from CommandInput', () => {
    const onCommandReceive = jest.spyOn(RobotSimulator.WrappedComponent.prototype, 'onCommandReceive');
    const wrapper = shallow(
      <RobotSimulator/>, {
        context: {store: mockStore(initialState)}
      }
    );
    const wrapper2 = wrapper.dive();
    const CommandInput = wrapper2.find('CommandInput');
    expect(CommandInput).toHaveLength(1);

    CommandInput.simulate('commandReceive', Command.parse('MOVE'));

    expect(onCommandReceive.mock.calls).toHaveLength(1);
    expect(onCommandReceive.mock.calls[0][0]).toEqual(Command.parse('MOVE'));

    onCommandReceive.mockRestore();
  });

  it('should handle invalid command', () => {
    const onCommandReceive = jest.spyOn(RobotSimulator.WrappedComponent.prototype, 'onCommandReceive');
    const wrapper = shallow(
      <RobotSimulator/>, {
        context: {store: mockStore(initialState)}
      }
    );
    const wrapper2 = wrapper.dive();
    const CommandInput = wrapper2.find('CommandInput');
    CommandInput.simulate('commandReceive', Command.parse('Some Invalid COMMAND'));

    expect(onCommandReceive.mock.calls).toHaveLength(1);
    expect(onCommandReceive.mock.calls[0][0].isInvalid).toEqual(true);

    onCommandReceive.mockRestore();
  });

});
