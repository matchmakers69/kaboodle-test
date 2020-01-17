import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';
import { findByTestAttr } from '../../../../tests/testUtils';

configure({ adapter: new Adapter() });

const props = {
  onChange: jest.fn(),
  placeholder: 'Search via postcode eg. 25',
  maxLength: '6',
  value: '198',
  type: '',
  name: ''
};

const setup = () => {
  return mount(<Input {...props} />);
};

describe('<Input />', () => {
  let Input;

  beforeAll(() => {
    Input = setup();
  });

  it('Input component exists', () => {
    const component = findByTestAttr(Input, 'accomodationInput');
    expect(component.length).toBe(1);
  });

  it('Input should have placeholder', () => {
    expect(
      Input.find('[data-test="accomodationInput"]').props().placeholder
    ).toBe('Search via postcode eg. 25');
  });

  it('renders input with given value', () => {
    expect(Input.find('[data-test="accomodationInput"]').props().value).toEqual(
      '198'
    );
  });

  it('calls onChange handler with a new value', () => {
    const mockEvent = { target: { value: '234' } };
    Input.find('[data-test="accomodationInput"]').simulate('change', mockEvent);
    expect(props.onChange).toBeCalledTimes(1);
    //w  expect(props.onChange).toHaveBeenCalledWith('234');
  });
});
