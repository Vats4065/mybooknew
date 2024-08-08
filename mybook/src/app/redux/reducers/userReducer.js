import { LOGIN_USER, LOGIN_USER_FAIL } from "@/app/redux/actions/user";


const initialState = {
    user: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
