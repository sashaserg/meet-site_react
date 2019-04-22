import { takeLatest } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import * as usersSaga from './usersSaga'
import * as authSaga from './authSaga'
import * as photoSaga from './photoSaga'
import * as commentSaga from './commentSaga'

function* rootSaga() {
    yield takeLatest(ACTION.USERS, usersSaga.getUsersSaga);
    yield takeLatest(ACTION.USER_BY_ID, usersSaga.getUserByIdSaga);

    yield takeLatest(ACTION.LOGIN, authSaga.loginSaga);
    yield takeLatest(ACTION.SIGNUP, authSaga.signupSaga);
    yield takeLatest(ACTION.LOGOUT, authSaga.logoutSaga);

    yield takeLatest(ACTION.PHOTOS, photoSaga.getPhotosByUserIdSaga);
    yield takeLatest(ACTION.PHOTO_BY_ID, photoSaga.getPhotoByIdSaga);

    yield takeLatest(ACTION.COMMENTS, commentSaga.getCommentsByPhotoIdSaga);
}

export default rootSaga;
