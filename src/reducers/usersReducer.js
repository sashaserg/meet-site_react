import ACTION from '../actions/actionTypes';

const initialState = {
    users: [],
    displayedUser: {},
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.USERS_RESPONSE: {
            return {
                ...state,
                users: action.users,
                isFetching: false,
                error: null
            }
        }
        case ACTION.USER_BY_ID_RESPONSE: {
            return {
                ...state,
                displayedUser: action.user,
                isFetching: false,
                error: null
            }
        }
        case ACTION.USER_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: { return state }
    }
}
