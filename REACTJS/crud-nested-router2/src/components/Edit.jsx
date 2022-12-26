import React, { useEffect } from 'react';
import { useState } from 'react';
import { json, useNavigate, useParams } from 'react-router-dom';
import Form from './Form';

const Edit = () => {
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
 const params=useParams()
 const navigate=useNavigate()

 useEffect(() => {
    fetch( " http://localhost:3001/User2/"+params.id).then((res)=>res.json())
    .then((data)=>{setUser(data)})
}, []);

     const handleUser=(e)=>{
        let newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser)
     }
    const updateUser=()=>{
        fetch("  http://localhost:3001/User2/"+params.id,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{'Content-Type':'application/json'}
        }).then(()=>{
            navigate('/')
          })
    }
    return (
        <div>
            <h2>Welcome To Edit User</h2>
            <Form  user={user} btnText="Update User" handleUser={handleUser} handleSubmit={updateUser}/>
        </div>
    );
}

export default Edit;