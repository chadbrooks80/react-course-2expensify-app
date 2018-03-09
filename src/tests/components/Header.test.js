import React from 'react';
import Header from '../../components/Header'
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render header correctly', () => {
    const renderer  = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    console.log(renderer.getRenderOutput());
});