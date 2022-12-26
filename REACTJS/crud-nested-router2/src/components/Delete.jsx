import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import User from './User';

const Delete = () => {
const [user,setUser]=useState({})
 const navigate=useNavigate();
 const params=useParams();
 useEffect(() => {
     fetch("http://localhost:3001/User2/"+params.id)
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data)
        setUser(data)})
 }, []);

 const confirmDelete=()=>{
    fetch("http://localhost:3001/User2/"+params.id,{
        method:'DELETE'
    }).then(()=>{
        navigate('/')
    })
     
 }
    return (
        <div>
           <ul>
              <li>{user.username}</li>
              <li>{user.password}</li>
              <li>{user.email}</li>
              <li>{user.gender}</li>
              <li>{user.pickgender}</li>
              <li>{user.year}-{user.month}-{user.date}</li>
              <li>{user.height}/{user.weight}</li>
          </ul> 
          <button type='button' className='btn btn-danger' onClick={confirmDelete}>Confirm Delete</button>
        </div>
    );
}

export default Delete;