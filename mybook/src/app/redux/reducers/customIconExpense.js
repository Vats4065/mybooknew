import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    iconExpense: [],
    error: null,
    loading: false,
};

const baseUrl = "http://localhost:8080/api/customIcon"

export const customIconExpenseSlice = createSlice({
    name: "customIconExpense",
    initialState,
    reducers: {
        customIconExpenseAdd: (state, action) => {
            state.iconExpense = [...state.iconExpense, action.payload]
        },
        customIconExpenseRemove: (state, action) => {
            state.iconExpense = state.iconExpense.filter(prev => prev._id !== action.payload);
        },
        customIconExpenseGet: (state, action) => {
            state.iconExpense = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { customIconExpenseAdd, customIconExpenseRemove, customIconExpenseGet, setLoading, setError } = customIconExpenseSlice.actions;

export const createIconExpense = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(`${baseUrl}/createIconExpense`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(customIconExpenseAdd(response.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getIconExpense = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${baseUrl}/getIconExpense`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(customIconExpenseGet(response?.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const removeIconExpense = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    console.log(credentials);


    try {
        const response = await axios.delete(`${baseUrl}/deleteIconExpense/${credentials}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        dispatch(customIconExpenseRemove(id));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default customIconExpenseSlice.reducer;
