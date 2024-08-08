import axios from "axios";


const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";


export const userLogin = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/user/login",
                data
            );
            dispatch({
                type: LOGIN_USER,
                payload: response.data,
            });
        } catch (err) {
            dispatch({
                type: LOGIN_USER_FAIL,
                payload: err.response ? err.response.data : err.message,
            });
        }
    };
};


export { LOGIN_USER, LOGIN_USER_FAIL };
