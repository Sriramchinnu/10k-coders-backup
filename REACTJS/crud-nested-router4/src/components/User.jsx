import React from 'react';
import {useNavigate} from 'react-router-dom'
const User = ({usr}) => {

   const navigate= useNavigate()
const handleEdit=(usr)=>{
   navigate('/Edit/'+usr.id)
}

const handleDelete=(usr)=>{
  navigate('/Delete/'+usr.id)
}
    return (
       <tr>
          <td>{usr.id}</td>
          <td>{usr.street}</td>
          <td>{usr.city}</td>
          <td>{usr.state}</td>
          <td>{usr.zipcode}</td>
          <td>{usr.country}</td>
          <td><button type='button' className='btn btn-warning' onClick={()=>handleEdit(usr)}>EDIT</button></td>
          <td><button type='button' className='btn btn-danger' onClick={()=>handleDelete(usr)}>DELETE</button></td>
       </tr>
    );
}

export default User;