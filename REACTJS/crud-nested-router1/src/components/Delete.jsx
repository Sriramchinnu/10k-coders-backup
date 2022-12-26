import React, { useEffect } from 'react';
import { useState } from 'react';
import User from './User';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
 const [user,setUser]=useState({})
  const navigate =useNavigate();
  const params =useParams();

  useEffect(() => {
    fetch("http://localhost:3001/User1/"+params.id)
    .then((response)=>response.json())
    .then((data)=>{
        setUser(data)
    })
  }, []);

  
  const confirmDelete=()=>{
       fetch(" http://localhost:3001/User1/"+params.id,{
        method:"DELETE",
  }).then(()=>{
    navigate("/")
  });
  }

    return (
        <div>
           <ul>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.password}</li>
            <li>{user.confirmpassword}</li>
            <li>{user.message}</li>
           </ul>
           <button type='button' className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button>
        </div>
    );
}

export default Delete;