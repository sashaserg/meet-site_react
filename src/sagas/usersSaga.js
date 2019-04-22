import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { getAllUsers, getUserById } from '../api/rest/usersService'

export function* getUsersSaga({query}) {
    yield put({type: ACTION.USER_REQUEST});
    try {
        const { data } = yield getAllUsers(query);
        yield put({ type: ACTION.USERS_RESPONSE, users: data})
    } catch (e) {
        yield put({ type: ACTION.USER_ERROR, error: e})
    }
}
export function* getUserByIdSaga({userId}) {
    yield put({type: ACTION.USER_REQUEST});
    try {
        const { data } = yield getUserById(userId);
        yield put({ type: ACTION.USER_BY_ID_RESPONSE, user: data})
    } catch (e) {
        yield put({ type: ACTION.USER_ERROR, error: e})
    }
}
