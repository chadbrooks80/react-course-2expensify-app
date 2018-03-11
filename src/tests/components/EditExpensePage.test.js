import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

//runs this before each test
let editExpense, removeExpense, history, wrapper, expense
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    expense = expenses[1];
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expense}
    />);
});

test('should render EditExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('should handle remove expense', () => {
    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expense.id });
});

