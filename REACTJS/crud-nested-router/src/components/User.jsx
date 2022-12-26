import React from 'react';

const User = ({usr}) => {
    return (
<tr>
<td>{usr.id}</td>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.dob}</td>
                            <td>{usr.emailid}</td>
                            <td>{usr.mobilenumber}</td>
                            <td>
                                <button type='button' className='btn btn-warning' >Edit</button>
                            </td>
                            <td>
                                <button type='button' className='btn btn-danger' >Delete</button>
                            </td>
</tr>
    );
}

export default User;
