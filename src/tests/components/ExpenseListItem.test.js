import ExpenseListItem from '../../components/ExpenseListItem'
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'

test('should expenseListItem correctly', () => {
    // key={expense.id} {...expense} 
    const expense=expenses[0];
    const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);
    expect(wrapper).toMatchSnapshot();
});