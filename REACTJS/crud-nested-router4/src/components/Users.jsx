import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const Users = () => {
 const [users,setUsers]=useState([])

 useEffect(() => {
    getUsers()
 }, []);

    const getUsers=async()=>{
      const data=await(await fetch(" http://localhost:3001/User4")).json()
      console.log(data);
      setUsers(data)
    }

    return (
        <div>
            <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {users.map((val,i)=><User usr={val} key={i}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Users;