import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useState } from "react";
const User5 = () => {
    const [persion, setpersion] = useState(
        {
            id: "",
            fname: "",
            lname: "",
            dob: "",
            emailid: "",
            mobilenumber: "",
        }
    );
    const [data, setdata] = useState([]);
    const [edit, setedit] = useState(false);
    useEffect(() => {
        getAllUsers()
    }, []);
    const handleChange = (e) => {
        var newallpersions = { ...persion }
        newallpersions[e.target.name] = e.target.value
        setpersion(newallpersions)
    }
    const getAllUsers = () => {
        axios.get(" http://localhost:3005/User5/").then((res) => {
            setdata(res.data)
        })
    }
    const addUser = () => {
        axios.post(" http://localhost:3005/User5/", persion).then((res) => {
            getAllUsers()
            clearForm()
        })
    }
    const clearForm = () => {
        setpersion({
            id: "",
            fname: "",
            lname: "",
            dob: "",
            emailid: "",
            mobilenumber: "",
        })
    }
    const editUser = (val) => {
        setedit(true)
        setpersion(val)
    }
    const delUser = (val) => {
        axios.delete(" http://localhost:3005/User5/" + val.id).then((res) => {
            getAllUsers()
        })
    }
    const updateUser = () => {
        axios.put(" http://localhost:3005/User5/" + persion.id, persion).then((res) => {
            
            getAllUsers()
           setedit(false)
            clearForm()
        })
    }
    return (
        <div>
            <form>
                <label htmlFor=''>ID: </label>
                <input type="number" name='id' value={persion.id} onChange={(e) => { handleChange(e) }} disabled /><br />
                <label htmlFor=''>First Name : </label>
                <input type="text" name='fname' value={persion.fname} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor=''>Last Name : </label>
                <input type="text" name='lname' value={persion.lname} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor=''>Date of Birth : </label>
                <input type="date" name='dob' value={persion.dob} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor=''>Email Id : </label>
                <input type="email" name='emailid' value={persion.emailid} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor=''>Mobile Number : </label>
                <input type="text" name='mobilenumber' value={persion.mobilenumber} onChange={(e) => { handleChange(e) }} /><br />

                {edit ? <button type='button' className='btn btn-info' onClick={updateUser}>Update User</button> :
                    <button type='button' className='btn btn-success' onClick={addUser}>Add User</button>}

                {/* <button type='button' className='btn btn-success' onClick={addUser}>Add User</button> */}

            </form>
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
                    {data.map((val, i) =>
                        <tr key={i}>

                            <td>{val.id}</td>
                            <td>{val.fname}</td>
                            <td>{val.lname}</td>
                            <td>{val.dob}</td>
                            <td>{val.emailid}</td>
                            <td>{val.mobilenumber}</td>
                            <td>
                                <button type='button' className='btn btn-warning' onClick={() => { editUser(val, i) }}>Edit</button>
                            </td>
                            <td>
                                <button type='button' className='btn btn-danger' onClick={() => { delUser(val, i) }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default User5