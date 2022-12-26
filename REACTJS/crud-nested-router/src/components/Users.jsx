import React from 'react';
import { useState } from 'react';
import User from './User';
const Users = () => {
    const [users, setusers] = useState([]);
    const getusers = async () => {
        var data = await (await fetch("http://localhost:3006/User5")).json()
        // console.log(data)
        setusers(data)
    }
    getusers()
    return (
        <div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateofBirth</th>
                        <th>EmailId </th>
                        <th>MobileNumber</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((val,i)=><User usr={val} key={i}/>)}
                    

                </tbody>


            </table>
        </div>
    );
}

export default Users;
