import React from 'react';
import { useNavigate } from 'react-router-dom';
const User = ({usr}) => {
    const navigate=useNavigate();
    const handleEdit=(usr)=>{
        console.log(usr)
          navigate('/Edit/'+usr.id)
    }
    const handleDelete=(usr)=>{
            navigate('/Delete/'+usr.id)
    }
    return (
    
         <tr>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.confirmpassword}</td>
            <td>{usr.message}</td>
            <td><button type='button' className='btn btn-warning' onClick={()=>{handleEdit(usr)}}>EDIT</button></td>
            <td><button type='button' className='btn btn-danger' onClick={()=>{handleDelete(usr)}}>DELETE</button></td>
        </tr> 

    );
}

export default User;