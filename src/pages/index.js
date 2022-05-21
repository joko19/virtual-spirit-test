import './../App.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { loadPostsStart } from '../redux/actions';
import { FiEye } from 'react-icons/fi'
import {BsPencil, BsTrash} from 'react-icons/bs'
import store from '../redux/store';

function Index() {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadPostsStart())
    }, [])

    return (
        <React.Fragment>
            <div className='p-12'>
                <h1 className="text-3xl font-bold text-center my-4">
                    Virtual Spirit Test
                </h1>
                <div className='flex flex-col gap-4 '>
                    {posts.map((value, index) => (
                        <div className='border rounded w-full p-4 hover:bg-gray-100 rounded-lg shadow-lg' key={index}>
                            <p className='font-bold text-gray-600'>{value.title}</p>
                            <div className='flex gap-4'>
                                <Link to={`/view/${value.id}`} className="border flex gap-2 px-2 py-1 rounded-lg hover:bg-blue-200">
                                    <FiEye color='blue' className='my-auto' /> View
                                </Link>
                                <Link to={`/edit/${value.id}`} className="border flex gap-2 px-2 py-1 rounded-lg hover:bg-green-300 cursor-pointer">
                                    <BsPencil color='green' className='my-auto' /> Update
                                </Link>
                                <div className="border flex gap-2 px-2 py-1 rounded-lg hover:bg-red-300 cursor-pointer">
                                    <BsTrash color='red' className='my-auto' /> Delete
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index
