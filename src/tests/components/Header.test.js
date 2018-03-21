import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';


let startLogout, wrapper
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

// test('should call startLogin on button click', () => {  
//     expect(startLogin).toHaveBeenCalled();
// });