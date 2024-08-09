import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    inputexpense: [],
    error: null,
    loading: false,
};

export const customInputExpenseSlice = createSlice({
    name: "customInputExpense",
    initialState,
    reducers: {
        customInputExpenseAdd: (state, action) => {
            state.inputexpense = [...state.inputexpense, action.payload]
        },
        customInputExpenseRemove: (state, action) => {

            state.inputexpense = state.inputexpense.filter(prev => prev.id !== action.payload.id)
        },
        customInputExpenseGet: (state, action) => {
            state.inputexpense = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { customInputExpenseAdd, customInputExpenseRemove, customInputExpenseGet, setLoading, setError } = customInputExpenseSlice.actions;

export const createExpense = (credentials) => async (dispatch) => {
    console.log({ credentials });
    dispatch(setLoading(true));
    try {
        const response = await axios.post("http://localhost:8080/api/customInput/createExpense", credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(customInputExpenseAdd(response.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getExpense = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get("http://localhost:8080/api/customInput/getExpense", {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch(customInputExpenseGet(response?.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const removeExpense = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.delete(`http://localhost:8080/api/customInput/deleteExpense/${credentials}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(customInputExpenseRemove(id));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default customInputExpenseSlice.reducer;
