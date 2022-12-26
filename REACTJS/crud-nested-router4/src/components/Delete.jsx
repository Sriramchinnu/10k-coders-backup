import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
const Delete = () => {
 const navigate=useNavigate()
 const params=useParams()
  const [user,setUser]=useState({})
 useEffect(() => {
    fetch(" http://localhost:3001/User4/"+params.id).then((res)=>res.json())
    .then((data)=>{
         setUser(data)
    })
 }, []);
 const confirmDelete=()=>{
    fetch(" http://localhost:3001/User4/"+params.id,{
        method:'DELETE',
    }).then(()=>{
        navigate('/')
    })
 }
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.street}</li>
                <li>{user.city}</li>
                <li>{user.state}</li>
                <li>{user.zipcode}</li>
                <li>{user.country}</li>
            </ul>
            <button className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button> 
        </div>
    );
}

export default Delete;