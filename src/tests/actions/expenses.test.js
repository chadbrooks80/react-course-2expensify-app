import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('Should setup edit expense action object', () => {
    const action = editExpense(
        '321zyx',
        {
            description: 'this is a description',
            note: 'this is a note',
            amount: 123,
            createdAt: 321
        }
    );

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '321zyx',
        updates: {
            description: 'this is a description',
            note: 'this is a note',
            amount: 123,
            createdAt: 321
        }
    });
})

test('should setup add expense action object with provide values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 30000,
        note: 'this one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        console.log('next test');

        database.ref().once('value').once('value').then((snapshot) => {
            expect(1).toBe(2);
            done();
        });
    });
});

test('should add expense with defaults to database and store', () => {

});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: "",
//             note: "",
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     });
// });