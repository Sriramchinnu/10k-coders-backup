import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Form from './Form';
const Create = () => {
    const [user,setUser]=useState({
        id:"",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        cpi: "",
        sem: "",
        exp: "",
        web: "",
    })

    const handleChange=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value 
        setUser(newUser)
    }

    const navigate=useNavigate()
  

    const addUser=()=>{
        fetch(" http://localhost:3001/User3/",{
            method:"POST",
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
            <Form handleSubmit={addUser} handleChange={handleChange} user={user} btnText="Add User" />
        </div>
    );
}

export default Create;