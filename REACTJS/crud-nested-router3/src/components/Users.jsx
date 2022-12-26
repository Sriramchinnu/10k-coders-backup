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
  var response=await(await(fetch(" http://localhost:3001/User3/"))).json();
      console.log(response);
      setUsers(response)
 }
    return (
        <div>
            <table className='table'>
                <thead>
                   <th>ID</th>
                   <th>University</th>
                   <th>Institute</th>
                   <th>Branch</th>
                   <th>Degree</th>
                   <th>Status</th>
                   <th>CPI</th>
                   <th>SEM</th>
                   <th>Experience</th>
                   <th>Website/Blog</th>
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