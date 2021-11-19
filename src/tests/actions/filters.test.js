import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate, 
    setTextFilter } 
    from "../../actions/filters";

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate action object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'});
});

test('should generate action object fo sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'});
});

test('should generate set new text filter', () => {
    const text = 'tu may';
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate set default text filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});