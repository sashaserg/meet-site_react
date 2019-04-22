import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { login, logout } from '../api/rest/authService'
import { addUser } from "../api/rest/usersService";

export function* loginSaga({user}) {
    yield put({type: ACTION.AUTH_REQUEST});
    try {
        const { data } = yield login(user);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        yield put({ type: ACTION.LOGIN_RESPONSE, user: data.user})
    } catch (e) {
        yield put({ type: ACTION.AUTH_ERROR, error: e})
    }
}
export function* signupSaga({user}) {
    yield put({type: ACTION.AUTH_REQUEST});
    try {
        const response = yield addUser(user);
        if( response )
            yield put({ type: ACTION.SIGNUP_RESPONSE});
        else
            throw new Error('No response from addUser');
    } catch (e) {
        yield put({ type: ACTION.AUTH_ERROR, error: e})
    }
}
export function* logoutSaga({refreshToken}) {
    yield put({type: ACTION.AUTH_REQUEST});
    try {
        const response = yield logout(refreshToken);
        if( response )
            yield put({ type: ACTION.LOGOUT_RESPONSE});
        else
            throw new Error('No response from logout');
    } catch (e) {
        yield put({ type: ACTION.AUTH_ERROR, error: e})
    }
}
