import React, { useEffect } from 'react';
import UserForm from './UserForm';
import User from './User';
import { useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
const Edit = () => {
const [user,setUser]=useState({
    id:"",
    name:"",
    username:"",
    email:"",
    password:"",
    confirmapassword:"",
    message:""
})
const params=useParams()
const navigate=useNavigate()
useEffect(() => {
   fetch(" http://localhost:3001/User1/"+params.id).
   then((res)=>res.json()).then((data)=>{
    setUser(data)
   })
}, []);
    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value 
        setUser(newUser)
    }

    const updateUser=()=>{
        fetch(" http://localhost:3001/User1/"+params.id,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>
            <h2>Welecome to Edit User</h2>
            <UserForm user={user} handleChange={handleChange} handleSubmit={updateUser} btnText="Update User"/> 
        </div>
    );
}

export default Edit;