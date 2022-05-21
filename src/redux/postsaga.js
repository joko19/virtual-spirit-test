import { take, takeEvery, takeLatest, put, all, delay, fork, call } from "redux-saga/effects"
import * as types from './actionTypes'

import { loadPostsSuccess, loadPostsError, viewPostsSuccess, viewPostsError } from "./actions"
import { loadPostsApi, viewPostApi } from "./api"

export function* onLoadPostsStartAsync() {
    try {
        const response = yield call(loadPostsApi)
        if (response.status === 200) {
            yield delay(500)
            yield put(loadPostsSuccess(response.data))
        }
    } catch (err) {
        yield put(loadPostsError(err.response.data))
    }
}

export function* onViewPostsStartAsync() {
    try {
        const {payload: id} = yield take(types.VIEW_POSTS_START)
        const response = yield call(viewPostApi, id)
        if (response.status === 200) {
            yield delay(500)
            yield put(viewPostsSuccess(response.data))
        }
    } catch (err) {
        yield put(viewPostsError(err.response.data))
    }
}

export function* onLoadPosts() {
    yield takeEvery(types.LOAD_POSTS_START, onLoadPostsStartAsync)
    yield takeEvery(types.VIEW_POSTS_START, onViewPostsStartAsync)
}

const postsSagas = [fork(onLoadPosts)]

export default function* rootSaga() {
    yield all([...postsSagas])
}