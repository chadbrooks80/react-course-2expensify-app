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
    const newExpense = {
        description: "new Expense",
        amount: 20500,
        createdAt: moment(0).add(4, 'days')
    };
    const action = {
        test('should remove expense by id', () => {
            const action = {
                id: expenses[1].id
            };
            const state = expensesReducer(expenses, action);
            expect(state).toEqual([expenses[0],expenses[2]]);
        });
        expense: newExpense
    }
    const state = expensesReducer(expenses, expense)
    console.log(state)
});


//should edit an expense

//should not edit expense if expense not found. 
