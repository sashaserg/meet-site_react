import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { getPhotoById, getPhotosByUserId } from '../api/rest/photoService'

export function* getPhotoByIdSaga({photoId}) {
    console.log(photoId);
    yield put({type: ACTION.PHOTO_REQUEST});
    try {
        const { data } = yield getPhotoById(photoId);
        yield put({ type: ACTION.PHOTO_BY_ID_RESPONSE, photo: data})
    } catch (e) {
        yield put({ type: ACTION.PHOTO_ERROR, error: e})
    }
}
export function* getPhotosByUserIdSaga({userId}) {
    yield put({type: ACTION.PHOTO_REQUEST});
    try {
        const { data } = yield getPhotosByUserId(userId);
        yield put({ type: ACTION.PHOTOS_RESPONSE, photos: data})
    } catch (e) {
        yield put({ type: ACTION.PHOTO_ERROR, error: e})
    }
}
