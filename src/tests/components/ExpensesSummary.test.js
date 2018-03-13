import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('snapshot should not display any results with zero expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={0}  total={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('snapshot should display with "expense" when expense count === 1', () => {
    const wrapper = shallow(<ExpensesSummary count={1}  total={1000} />);
    expect(wrapper).toMatchSnapshot();
});

test('snapshot should display with "expenses" when expense count > 1', () => {
    const wrapper = shallow(<ExpensesSummary count={2}  total={1500} />);
    expect(wrapper).toMatchSnapshot();
});