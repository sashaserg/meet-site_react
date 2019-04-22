import ACTION from '../actions/actionTypes';

const initialState = {
    user: null,
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.AUTH_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.LOGIN_RESPONSE: {
            return {
                ...state,
                user: action.user,
                isFetching: false,
                error: null
            }
        }
        case ACTION.SIGNUP_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                error: null
            }
        }
        case ACTION.LOGOUT_RESPONSE: {
            return {
                ...state,
                user: null,
                isFetching: false,
                error: null
            }
        }
        case ACTION.AUTH_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: { return state }
    }
}
