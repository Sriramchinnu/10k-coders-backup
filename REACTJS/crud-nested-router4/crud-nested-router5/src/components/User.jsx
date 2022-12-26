import React from 'react';
import {useNavigate} from 'react-router-dom'
const User = ({user}) => {
const navigate=useNavigate()
    
const handleEdit=(user)=>{
    navigate('/Edit/'+user.id)
}


    const handleDelete=(user)=>{
        navigate('/Delete/'+user.id)
    }
    return (
       <tr>
          <td>{user.id}</td>
          <td>{user.fname}</td>
          <td>{user.lname}</td>
          <td>{user.dob}</td>
          <td>{user.email}</td>
          <td>{user.mobile}</td>
          <td><button type='button' className='btn btn-warning' onClick={()=>handleEdit(user)}>Edit</button></td>
          <td><button type='button' className='btn btn-danger' onClick={()=>handleDelete(user)}>Delete</button></td>
       </tr>
    );
}

export default User;