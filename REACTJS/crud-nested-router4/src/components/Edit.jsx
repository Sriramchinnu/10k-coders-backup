import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import Form from './Form';
const Edit = () => {
 const navigate=useNavigate()
 const params=useParams()
 const [user,setUser]=useState({
    id:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:""
 })
 const handleUser=(e)=>{
 let newUser={...user}
 newUser[e.target.name]=e.target.value 
 setUser(newUser)
 }

  useEffect(() => {
    fetch(" http://localhost:3001/User4/"+params.id).then((res)=>res.json())
    .then((data)=>{
        setUser(data)
    })
  }, []);
    const updateUser=()=>{
        fetch(" http://localhost:3001/User4/"+params.id,{
            method:'PUT',
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
            <h3>Update User</h3>
            <Form handleUser={handleUser} handleSubmit={updateUser} user={user} btnText="Update User"/>
        </div>
    );
}

export default Edit;