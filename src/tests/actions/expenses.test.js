import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: { 
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String) 
        }
    });
});