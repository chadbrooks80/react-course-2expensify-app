import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '100',
        description: "new Expense",
        amount: 20500,
        createdAt: moment(0).add(4, 'days')
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const note = 'add note';
    const action = {
        id: '2',
        type: 'EDIT_EXPENSE',
        updates: { note }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].note).toBe(note)
});

test('should not edit expense if expense not found', () => {
    const updates = { note: 'add note' };
    const action = {
        id: '-1',
        type: 'EDIT_EXPENSE',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
});

test('should set expenses', () => {
   const action = {
       type: 'SET_EXPENSES',
       expenses
   }

   
   const state = expensesReducer({}, action)
   expect(state).toEqual(expenses);
});