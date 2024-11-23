import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import ActionMenu from '../src/components/ActionMenu';

describe('ActionMenu Component', () => {
  it('should toggle the menu when clicked', () => {
    const wrapper = shallow(<ActionMenu />);
    const toggleSpy = sinon.spy(wrapper.instance(), 'toggleMenu');
    
    // Simulate click event
    wrapper.find('button.toggle-button').simulate('click');
    
    expect(toggleSpy.calledOnce).to.be.true;
  });
});
