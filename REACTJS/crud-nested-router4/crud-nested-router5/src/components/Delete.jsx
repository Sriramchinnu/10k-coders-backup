import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom'

const Delete = () => {
  const [user,setUser]=useState({})
    const navigate=useNavigate()
    const params=useParams()

    useEffect(() => {
        fetch("http://localhost:3001/User5/"+params.id)
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
    }, []);

    const confirmDelete=()=>{
        fetch("http://localhost:3001/User5/"+params.id,{
            method:"DELETE",
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.fname}</li>
                <li>{user.lname}</li>
                <li>{user.dob}</li>
                <li>{user.email}</li>
                <li>{user.mobile}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button> 
        </div>
    );
}

export default Delete;