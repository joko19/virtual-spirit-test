import * as types from './actionTypes'

export const loadPostsStart = () => ({
    type : types.LOAD_POSTS_START
})

export const loadPostsSuccess = (posts) => ({
    type : types.LOAD_POSTS_SUCCESS,
    payload: posts
})

export const loadPostsError = (err) => ({
    type : types.LOAD_POSTS_ERROR,
    payload: err
})

export const viewPostsStart = (id) => ({
    type : types.VIEW_POSTS_START,
    payload: id
})

export const viewPostsSuccess = (posts) => ({
    type : types.VIEW_POSTS_SUCCESS,
    payload: posts
})

export const viewPostsError = (err) => ({
    type : types.VIEW_POSTS_ERROR,
    payload: err
})