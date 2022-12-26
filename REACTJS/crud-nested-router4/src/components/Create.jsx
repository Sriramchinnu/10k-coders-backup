import React from 'react';
import Form from './Form';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
const Create = () => {
 const [user,setUser]=useState({
    id:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:""
 })
 const navigate=useNavigate()

const handleUser=(e)=>{
    let newUser={...user}
    newUser[e.target.name]=e.target.value 
    setUser(newUser)
}
 const addUser=()=>{
    fetch(" http://localhost:3001/User4",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(()=>{
        navigate('/')
    })
 }
    return (
        <div>
            <h3>Create New User</h3>
              <Form handleUser={handleUser} handleSubmit={addUser} user={user} btnText="Create User"/> 
        </div>
    );
}

export default Create;