import React from 'react';
import { shallow } from 'enzyme';
import { CommandInput } from '../CommandInput';
import { Command } from "../../model/Command";

describe("CommandInput Component", () => {

  it('renders as expected', () => {
    const onCommandReceive = jest.fn();
    const wrapper = shallow(
      <CommandInput onCommandReceive={onCommandReceive}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a TextInput', () => {
    const onCommandReceive = jest.fn();
    const wrapper = shallow(
      <CommandInput onCommandReceive={onCommandReceive}/>
    );

    const TextInput = wrapper.find('TextInput');
    expect(TextInput).toHaveLength(1);
  });

  it('should receive command', () => {
    const onCommandReceive = jest.fn();
    const wrapper = shallow(
      <CommandInput onCommandReceive={onCommandReceive}/>
    );

    const TextInput = wrapper.find('TextInput');

    TextInput.simulate('changeText', 'MOVE');
    expect(wrapper.state('command')).toBe('MOVE');

    try {
      TextInput.simulate('submitEditing'); // TODO: create proper TextInput mock to fix
    } catch (e) {
    }
    expect(onCommandReceive.mock.calls).toHaveLength(1);
    expect(onCommandReceive.mock.calls[0][0]).toBeInstanceOf(Command);
    expect(onCommandReceive.mock.calls[0][0]).toEqual(Command.parse('MOVE'));
  });

  it('should not receive an empty command', () => {
    const onCommandReceive = jest.fn();
    const wrapper = shallow(
      <CommandInput onCommandReceive={onCommandReceive}/>
    );

    const TextInput = wrapper.find('TextInput');

    try {
      TextInput.simulate('submitEditing');
    } catch (e) {
    }
    expect(onCommandReceive.mock.calls).toHaveLength(0);
  });

  it('should clear the input after receive', () => {
    const onCommandReceive = jest.fn();
    const wrapper = shallow(
      <CommandInput onCommandReceive={onCommandReceive}/>
    );

    const TextInput = wrapper.find('TextInput');

    TextInput.simulate('changeText', 'MOVE');

    try {
      TextInput.simulate('submitEditing');
    } catch (e) {
    }
    expect(onCommandReceive.mock.calls).toHaveLength(1);

    expect(wrapper.state('command')).toBe('');
  });

});
