import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expensesTotal'

test('should return zero with empty array', () => {
    const total = expensesTotal([]);
    expect(total).toBe(0);
});

test('should add up single expense', () => {
    const total = expensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});

test('should add up multiple expenses', () => {
    const total = expensesTotal(expenses);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
