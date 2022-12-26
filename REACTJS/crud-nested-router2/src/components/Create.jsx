import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
const Create = () => {
    const [user,setUser]=useState({
        id:"",
        username: "",
        password: "",
        email: "",
        gender: "",
        pickgender: "",
        year:"",
        month:"",
        date:"",
        height:"",
        weight:""
    })
    const navigate=useNavigate()
    const handleUser=(e)=>{
        let newUser={...user}
     newUser[e.target.name]=e.target.value 
     setUser(newUser)
    }

    const addUser=()=>{
        fetch(" http://localhost:3001/User2",{
         method:"POST",
         body:JSON.stringify(user),
         headers:{'Content-Type':'application/json'}
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div>
           <Form  handleUser={handleUser} handleSubmit={addUser} user={user} btnText="Add User"/>  
        </div>
    );
}

export default Create;