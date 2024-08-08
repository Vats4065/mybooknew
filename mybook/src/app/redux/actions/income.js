import axios from 'axios'
export const CREATE_INCOME = "CREATE_INCOME"
export const CREATE_INCOME_FAIL = "CREATE_INCOME_FAIL"
export const GET_INCOME = "GET_INCOME"
export const GET_INCOME_FAIL = "GET_INCOME_FAIL"
export const DELETE_INCOME = "DELETE_INCOME"
export const DELETE_INCOME_FAIL = "DELETE_INCOME_FAIL"
export const UPDATE_INCOME = "UPDATE_INCOME"
export const UPDATE_INCOME_FAIL = "UPDATE_INCOME_FAIL"

const customInputBaseUrl = "http://localhost:8080/api/customInput"

export const createIncome = (data) => {
    console.log(data);
    return async (dispatch) => {
        try {
            const response = await axios.post(
                `${customInputBaseUrl}/createIncome`,
                data
            );
            dispatch({
                type: CREATE_INCOME,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: CREATE_INCOME_FAIL,
                payload: err.response ? err.response.data : err.message,
            });
        }
    };
}

export const getIncome = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `${customInputBaseUrl}/getIncome`,
                data
            );
            dispatch({
                type: GET_INCOME,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: GET_INCOME_FAIL,
                payload: err.response ? err.response.data : err.message,
            });
        }
    };
}

export const deleteIncome = (data, id) => {
    return async () => {
        try {
            await axios.delete(`${customInputBaseUrl}/deleteIncome/${id}`);
            dispatch({
                type: DELETE_INCOME,
                payload: data,
            });
        } catch (err) {
            dispatch({
                type: DELETE_INCOME_FAIL,
                payload: err.response ? err.response.data : err.message,
            });
        }
    }
}

export const updateIncome = (data, id) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`${customInputBaseUrl}/updateIncome/${id}`, data);
            dispatch({
                type: UPDATE_INCOME,
                payload: response.data,
            });
        }
        catch (err) {
            dispatch({
                type: UPDATE_INCOME_FAIL,
                payload: err.response ? err.response.data : err.message,
            });
        }
    }
}