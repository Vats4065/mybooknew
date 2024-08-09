
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    inputIncome: [],
    error: null,
    loading: false
}

export const customInputIncomeSlice = createSlice({
    name: 'customInputIncome',
    initialState,
    reducers: {
        customInputIncomeAdd: (state, action) => {


            state.inputIncome = [...state.inputIncome, action.payload]
        },
        customInputIncomeRemove: (state, action) => {

            state.inputIncome = state.inputIncome.filter(prev => prev.id !== action.payload.id)
        },
        customeInputIncomeGet: (state, action) => {
            state.inputIncome = action?.payload
        },
        setLoading: (state, action) => {
            state.loading = action?.payload;
        },
        setError: (state, action) => {
            state.error = action?.payload;
        }
    }
});

export const { customInputIncomeAdd, customInputIncomeRemove, customeInputIncomeGet, setLoading, setError } = customInputIncomeSlice.actions;


export const createIncome = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post("http://localhost:8080/api/customInput/createIncome", credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch(customInputIncomeAdd(response?.data))

    }
    catch (error) {
        dispatch(setError(error))
    }
}

export const getIncome = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get("http://localhost:8080/api/customInput/getIncome")
        dispatch(customeInputIncomeGet(response?.data))


    } catch (error) {
        dispatch(setError(error))
    }
}


export const removeIncome = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        console.log(credentials);
        const response = await axios.delete(`http://localhost:8080/api/customInput/deleteIncome/${credentials}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch(customInputIncomeRemove(id))
    } catch (error) {
        dispatch(setError(error))
    }
}
export default customInputIncomeSlice.reducer;
