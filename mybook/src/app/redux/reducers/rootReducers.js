import { combineReducers } from 'redux';
import customInputIncomeReducer from "./customInputIncomeSlice"
import customInputExpenseReducer from "./customInputExpenseSlice"

const rootReducer = combineReducers({
    income: customInputIncomeReducer,
    expense: customInputExpenseReducer,
});


export default rootReducer;