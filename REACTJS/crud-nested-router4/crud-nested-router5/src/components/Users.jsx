import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import User from './User';

const Users = () => {
const [users,setUsers]=useState([])
   useEffect(() => {
   getUsers()
   }, []);

 const getUsers=async ()=>{
    let data=await (await fetch("http://localhost:3001/User5")).json()
    console.log(data)
    setUsers(data)
 } 
    return (
        <div>
            <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {users.map((val,i)=><User  user={val} key={i}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Users;