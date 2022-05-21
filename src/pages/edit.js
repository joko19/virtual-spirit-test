import './../App.css';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { viewPostsStart } from '../redux/actions';

function Edit() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { post } = useSelector(state => state.data)
    useEffect(() => {
        dispatch(viewPostsStart(id))
    }, [])
    console.log(post)
    return (
        <React.Fragment>
            <div className='p-12'>
                <h1 className="text-3xl font-bold text-center my-4">
                    Detail Data
                </h1>
                <h1 className='font-bold text-xl'>{post.title}</h1>
                <p className='text-gray-600'>{post.body}</p>
            </div>
        </React.Fragment>
    );
}

export default Edit
