import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startEditExpense, startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';


jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

const createMockStore = configureMockStore([thunk]);

//adds each expense into database for testing. 
beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expectedExpenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expectedExpenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expectedExpenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/1`).once('value')  
    }).then((snapshot) => {
        expect(snapshop.val()).toBeFalsy();
        done();
    });   
});

test('should edit expense on firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates = {
        notes: "these are my notes that should change"
    }
    store.dispatch(startEditExpense(id, updates))
    .then((snapshot) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value')
    })
    .then((snapshot) => {
        expect(snapshot.val().notes).toBe(updates.notes);
        done();
    })

});