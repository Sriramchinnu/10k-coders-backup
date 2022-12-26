import React from 'react';
import {useNavigate} from 'react-router-dom'
const User = ({usr}) => {

const navigate=useNavigate()
const editUser=(usr)=>{
    navigate('/Edit/'+usr.id)
}
const deleteUser=(usr)=>{
     navigate('/Delete/'+usr.id)
}
    return (
     
            <tr>
                <td>{usr.id}</td>
                <td>{usr.university}</td>
                <td>{usr.institute}</td>
                <td>{usr.branch}</td>
                <td>{usr.degree}</td>
                <td>{usr.status}</td>
                <td>{usr.cpi}</td>
                <td>{usr.sem}</td>
                <td>{usr.exp}</td>
                <td>{usr.web}</td>
                <td><button type="button" className="btn btn-warning" onClick={() => {editUser(usr)}}>Edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => {deleteUser(usr)}}>Delete </button></td>
            </tr>
      
    );
}

export default User;