import { put } from 'redux-saga/effects'
import ACTION from '../actions/actionTypes'
import { getCommentsByPhotoId } from '../api/rest/commentService'

export function* getCommentsByPhotoIdSaga({photoId}) {
    console.log(photoId);
    yield put({type: ACTION.COMMENT_REQUEST});
    try {
        const {data} = yield getCommentsByPhotoId(photoId);
        yield put({type: ACTION.COMMENTS_RESPONSE, comments: data})
    } catch (e) {
        yield put({type: ACTION.COMMENT_ERROR, error: e})
    }
}
