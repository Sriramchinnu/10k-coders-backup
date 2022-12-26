import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';
const Create= () => {
    const navigate= useNavigate();
  const [user,setUser]=useState({
    id:"",
    name:"",
    username:"",
    email:"",
    password:"",
    confirmapassword:"",
    message:""
  })
    const handleChange=(e)=>{
     let newUser={...user};
     newUser[e.target.name]=e.target.value 
     setUser(newUser)
    }
    
    const addUser=()=>{
        fetch(" http://localhost:3001/User1",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                'Content-Type':"application/json"
            }
        }).then(()=>{
            console.log("User Added")
            navigate('/')
            clearForm()
        })
    }

    const clearForm=()=>{
        setUser({
            id:"",
            name:"",
            username:"",
            email:"",
            password:"",
            confirmapassword:"",
            message:""
        })
    }
    return (
        <div>
           <UserForm handleChange={handleChange} user={user} handleSubmit={addUser}  btnText="Create User"/>
        </div>
    );
}

export default Create;