import ACTION from '../actions/actionTypes';

const initialState = {
    comments: [],
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.COMMENT_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.COMMENTS_RESPONSE: {
            return {
                ...state,
                comments: action.comments,
                isFetching: false,
                error: null
            }
        }
        case ACTION.COMMENT_ADD_RESPONSE: {
            let newComments = state.comments;
            newComments.push(action.comment);
            return {
                ...state,
                comments: newComments,
                isFetching: false,
                error: null
            }
        }
        case ACTION.COMMENT_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: { return state }
    }
}
