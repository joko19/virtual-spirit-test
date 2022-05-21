import './../App.css';
import React, { useEffect, useState } from 'react'
import api from '../api/api';

function Edit() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            await api.index()
                .then((res) => setData(res.data))
        }
        getData()
        console.log("hello world")
    }, [])

    return (
        <React.Fragment>
            <div className='p-12'>
                <h1 className="text-3xl font-bold text-center my-4">
                    Detail Data
                </h1>
                <div className='flex flex-col gap-4 '>
                    {data.map((value, index) => (
                        <div className='border rounded w-full p-4'>
                            <p className='font-bold'>{value.title}</p>
                            <p className='text-gray-500'>{value.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Edit
