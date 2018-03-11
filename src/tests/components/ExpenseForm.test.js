import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render expenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseForm with given expense data', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseForm
        expense={expense}
    />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseForm with given expense data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot(); //snapshot before
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} //dummy function to stop error can't find e.preventDefault
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); //snapshot after
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Description'
    //gets the first input it finds with a(0) (index)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New Note'
    wrapper.find('textarea').simulate('change', { target: { value } });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '2s2.22';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', { target: { value } });
    expect(wrapper.state('amount')).toBe('');
});

test('should call on submit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    expect(wrapper.state('error')).toBe('');

    const {description, note, amount, createdAt} = expenses[0];
    expect(onSubmitSpy).toHaveBeenLastCalledWith({description, note, amount, createdAt});


});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);

    //this allows us to grab the handler and then call it
    //which is why I have (now) the end, itis calling it on the onDateChange
    //ondateChange is a method see it inside the expenseForm
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});