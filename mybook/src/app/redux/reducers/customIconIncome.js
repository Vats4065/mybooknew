import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = "http://localhost:8080/api/customIcon"

const initialState = {
    iconIncome: [],
    error: null,
    loading: false,
};

export const customIconIncomeSlice = createSlice({
    name: "customIconInput",
    initialState,
    reducers: {
        customIconIncomeAdd: (state, action) => {
            state.iconIncome = [...state.iconIncome, action.payload]
        },
        customIconIncomeRemove: (state, action) => {
            state.iconIncome = state.iconIncome.filter(prev => prev._id !== action.payload);
        },
        customIconIncomeGet: (state, action) => {
            state.iconIncome = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { customIconIncomeAdd, customIconIncomeRemove, customIconIncomeGet, setLoading, setError } = customIconIncomeSlice.actions;

export const createIconIncome = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(`${baseUrl}/createIconIncome`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(customIconIncomeAdd(response.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getIconIncome = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(`${baseUrl}/getIconIncome`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        dispatch(customIconIncomeGet(response?.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const removeIconIncome = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    console.log(credentials);
    try {
        const response = await axios.delete(`${baseUrl}/deleteIconIncome/${credentials}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        dispatch(customIconIncomeRemove(id));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default customIconIncomeSlice.reducer;
