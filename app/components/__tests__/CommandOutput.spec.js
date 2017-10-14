import React from 'react';
import { shallow } from 'enzyme';
import { CommandOutput } from '../CommandOutput';

describe("CommandOutput Component", () => {

  it('renders as expected', () => {
    const wrapper = shallow(
      <CommandOutput output=""/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Text', () => {
    const wrapper = shallow(
      <CommandOutput output="Some output"/>
    );

    const Text = wrapper.find('Text');
    expect(Text).toHaveLength(1);
  });

});
