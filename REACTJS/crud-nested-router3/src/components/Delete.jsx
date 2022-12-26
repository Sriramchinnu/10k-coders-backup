import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const Delete = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        fetch(" http://localhost:3001/User3/" + params.id).then((res) => res.json())
            .then((data) => {
                setUser(data)
            })
    }, []);

    const confirmDelete=()=>{
        fetch(" http://localhost:3001/User3/"+params.id,{
            method:"DELETE"
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.university}</li>
                <li>{user.institute}</li>
                <li>{user.branch}</li>
                <li>{user.degree}</li>
                <li>{user.status}</li>
                <li>{user.subjects}</li>
                <li>{user.cpi}</li>
                <li>{user.sem}</li>
                <li>{user.exp}</li>
                <li>{user.web}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button>
        </div>
    );
}

export default Delete;