import moment from 'moment';
import {
    setStartDate, 
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Should generate filter action object when parameter is sent', () => {
    const text = 'textFilter'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate action object for text filter when no parameter is sent', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate filter action object for sorting by Date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('Should generate filter action object for sorting by Amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});