import React from 'react';
import { configure, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../../tests/testUtils';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

const props = {
  accomodationTypes: []
};

const setup = () => {
  return mount(
    <BrowserRouter>
      <NavigationBar {...props} />
    </BrowserRouter>
  );
};

describe('Navigation items', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });
  it('renders component without crash', () => {
    const component = findByTestAttr(wrapper, 'navigationBar');
    expect(component.length).toBe(1);
  });

  it('should contain a home link', () => {
    expect(wrapper.find(Link).filter({ to: '/' })).toHaveLength(1);
  });
});
