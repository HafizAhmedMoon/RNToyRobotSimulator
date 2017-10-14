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

    const TextInput = wrapper.find('TextInput');
    expect(TextInput).toHaveLength(1);

    TextInput.simulate('changeText', 'MOVE');
    expect(wrapper.state('command')).toBe('MOVE');

    try {
      TextInput.simulate('submitEditing'); // TODO: create proper TextInput mock to fix
    } catch (e) {
    }
    expect(onCommandReceive.mock.calls).toHaveLength(1);
    expect(onCommandReceive.mock.calls[0][0]).toBeInstanceOf(Command);
    expect(onCommandReceive.mock.calls[0][0]).toEqual(Command.parse('MOVE'));

    expect(wrapper.state('command')).toBe('');
  });
});
