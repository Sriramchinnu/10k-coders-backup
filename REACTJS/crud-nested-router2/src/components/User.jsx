import React from 'react';
import { useNavigate } from 'react-router-dom';



const User = ({usr}) => {
    const navigate=useNavigate()
const handleEdit=(usr)=>{
   navigate('/Edit/'+usr.id)
}

const handledDelete=(usr)=>{
   navigate('/Delete/'+usr.id)
}
    return (
        <tr>
              <td>{usr.id}</td>
              <td>{usr.username}</td>
              <td>{usr.password}</td>
              <td>{usr.email}</td>
              <td>{usr.gender}</td>
              <td>{usr.pickgender}</td>
              <td>{usr.year}-{usr.month}-{usr.date}</td>
              <td>{usr.height}/{usr.weight}</td>
              <td><button type='button' className='btn btn-warning' onClick={()=>{handleEdit(usr)}}>EDIT</button></td>
              <td><button type='button' className='btn btn-danger' onClick={()=>{handledDelete(usr)}}>DELETE</button></td>
        </tr>
    );
}

export default User;