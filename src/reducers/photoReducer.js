import ACTION from '../actions/actionTypes';

const initialState = {
    photos: [],
    displayedPhoto: {},
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.PHOTO_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.PHOTOS_RESPONSE: {
            return {
                ...state,
                photos: action.photos,
                isFetching: false,
                error: null
            }
        }
        case ACTION.PHOTO_BY_ID_RESPONSE: {
            return {
                ...state,
                displayedPhoto: action.photo,
                isFetching: false,
                error: null
            }
        }
        case ACTION.PHOTO_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: { return state }
    }
}
