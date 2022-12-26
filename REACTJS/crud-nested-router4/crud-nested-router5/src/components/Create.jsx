import React from 'react';
import { useState } from 'react';
import Form from './Form';
import {useNavigate} from 'react-router-dom'
const Create = () => {
const [user,setUser]=useState({
    id:"",
    fname:"",
    lname:"",
    dob:"",
    email:"",
    mobile:"",
})
const navigate=useNavigate()
const handleUser=(e)=>{
    let newUser={...user}
    newUser[e.target.name]=e.target.value 
    setUser(newUser)
}

const addUser=()=>{
   fetch("http://localhost:3001/User5",{
    method:"POST",
    body:JSON.stringify(user),
    headers:{'Content-Type':'application/json'}
   }).then(()=>{
    navigate('/')
   })
}
    return (
        <div>
             <h3>Create New User</h3>
             <Form handleUser={handleUser} handleSubmit={addUser} btnText="Create User" user={user}/>
        </div>
    );
}

export default Create;