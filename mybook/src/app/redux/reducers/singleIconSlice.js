import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    singleIcon: [],
    error: null,
    loading: false,
};

const baseUrl = "http://localhost:8080/api/singleIcon"

export const singleIconSlice = createSlice({
    name: "singleIcon",
    initialState,
    reducers: {
        singleIconAdd: (state, action) => {
            state.singleIcon = [...state.singleIcon, action.payload]
        },
        singleIconRemove: (state, action) => {
            state.singleIcon = state.singleIcon.filter(prev => prev._id !== action.payload);
        },
        singleIconUpdate: (state, action) => {
            state.singleIcon = state.singleIcon.filter(prev => prev._id == action.payload._id)
        },
        singleIconGet: (state, action) => {
            state.singleIcon = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { singleIconAdd, singleIconRemove, singleIconGet, setLoading, setError } = singleIconSlice.actions;

export const createSingleIcon = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(`${baseUrl}/createSingleIcon`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        dispatch(singleIconAdd(response.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const getSingleIcon = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {

        const response = await axios.get(`${baseUrl}/singleIcon`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        dispatch(singleIconGet(response?.data));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const removeSingleIcon = (credentials) => async (dispatch) => {
    dispatch(setLoading(true));
    console.log(credentials);

    try {
        const response = await axios.delete(`${baseUrl}/deleteSingleIcon/${credentials}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        dispatch(singleIconRemove(id));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};


export const updateSingleIcon = (credentials) => (dispatch) => {
    dispatch(setLoading(true));
    console.log(credentials);
    axios.patch(`${baseUrl}/updateSingleIcon/${credentials.id}`, credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {

            dispatch(singleIconUpdate(response.data));
            dispatch(setError(null));
        })
        .catch((error) => {
            dispatch(setError(error.message));
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
}




export default singleIconSlice.reducer;
