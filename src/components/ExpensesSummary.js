import React from 'react';
import { connect } from 'react-redux'
import expensesTotal from '../selectors/expensesTotal';
import filterExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) =>  {
    
    const displayResults = props.count !== 0;
    const expenseName = props.count > 1 ? 'expenses' : 'expense';

    return (
        <div>
            {displayResults &&
                <h1>{props.count} {expenseName} Totalling {props.total}</h1>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const filteredExpenses = filterExpenses(state.expenses, state.filters)
    return {
        count: filteredExpenses.length,
        total: numeral(expensesTotal(filteredExpenses) / 100).format('$0,0.00')
    }
}

export default connect(mapStateToProps)(ExpensesSummary);