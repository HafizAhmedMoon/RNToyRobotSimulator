import React from 'react';
import { shallow } from 'enzyme';
import { Board } from "../Board";

describe("Board Component", () => {

  it('renders as expected', () => {
    const wrapper = shallow(
      <Board rows={5} cols={5} x={2} y={4}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
