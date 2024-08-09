import { combineReducers } from 'redux';
import customInputIncomeReducer from "./customInputIncomeSlice"
import customInputExpenseReducer from "./customInputExpenseSlice"
import customIconExpenseReducer from './customIconExpense';
import customIconIncomeReducer from './customIconIncome';
import singleIconReducer from './singleIconSlice'

const rootReducer = combineReducers({
    income: customInputIncomeReducer,
    expense: customInputExpenseReducer,
    iconExpense: customIconExpenseReducer,
    iconIncome: customIconIncomeReducer,
    singleIcon: singleIconReducer
});


export default rootReducer;