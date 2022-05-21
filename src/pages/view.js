import './../App.css';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { viewPostsStart } from '../redux/actions';

function View() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.data)
    useEffect(() => {
        dispatch(viewPostsStart(id))
    }, [])
    console.log(posts)
    return (
        <React.Fragment>
            <div className='p-12'>
                <h1 className="text-3xl font-bold text-center my-4">
                    Detail Data
                </h1>
                <h1 className='font-bold text-xl'>{posts.title}</h1>
                <p className='text-gray-600'>{posts.body}</p>
            </div>
        </React.Fragment>
    );
}

export default View
