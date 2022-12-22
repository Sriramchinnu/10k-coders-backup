import React, { useState } from "react"



import axios from 'axios'
import { useEffect } from "react";
const User1 = () => {
    const [persion, setpersion] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
    });
    const [persions, setpersions] = useState([])
    const [isEdit, setisEdit]=useState(false)
    useEffect(() => {
        getAllUsers()
    }, []);

    const handleChange = (e) => {
        var newpersion = { ...persion }
        newpersion[e.target.name] = e.target.value
        setpersion(newpersion)
    }
    const getAllUsers = () => {
        axios.get("http://localhost:3005/User1/").then((response) => {
            console.log(response.data);
            setpersions(response.data)
        })
    }

    const addUser = () => {
        axios.post("http://localhost:3005/User1/", persion).then((res) => {
            getAllUsers();
            clearForm()
        })
    }
    const deleteUser = (val) => {
        axios.delete("http://localhost:3005/User1/" + val.id).then((res) => {
            getAllUsers()
        })
    }
    const editUser = (val) => {
             setisEdit(true)
             setpersion(val)
    }
    const clearForm=()=>{
        setpersion({
            id: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: "",
    })
    }
    const updateUser=()=>{
        axios.put("http://localhost:3005/User1/"+persion.id,persion).then((res)=>{
            getAllUsers()
            isEdit(false)
        })
clearForm()
    }
    return (

        <div>

            <form>
                <label> Id : </label>
                <input type="text" name="id" value={persion.id} onChange={(e) => { handleChange(e) }} disabled /><br />
                <label> Name : </label>
                <input type="text" name="name" value={persion.name} onChange={(e) => { handleChange(e) }} /><br />
                <label> UserName : </label>
                <input type="text" name="username" value={persion.username} onChange={(e) => { handleChange(e) }} /><br />
                <label> Email : </label>
                <input type="email" name="email" value={persion.email} onChange={(e) => { handleChange(e) }} /><br />
                <label> Password : </label>
                <input type="password" name="password" value={persion.password} onChange={(e) => { handleChange(e) }} /><br />
                <label> ConfirmPassword : </label>
                <input type="confirmPassword" name="confirmPassword" value={persion.confirmPassword} onChange={(e) => { handleChange(e) }} /><br />
                <label> Message : </label>
                <input type="message" name="message" value={persion.message} onChange={(e) => {handleChange(e) }} /><br />
                {isEdit ? (<button onClick={updateUser} className="btn btn-primary">updateUser</button>
                ) : (
                <button type="button" onClick={addUser} >AddUser</button>)}

                {/* <button type="button" onClick={addUser}>AddUser</button> */}

            </form>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">ConfirmPassword</th>
                        <th scope="col">Message</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {persions.map((val, i) =>
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.confirmPassword}</td>
                            <td>{val.message}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => { editUser(val) }}>Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" type='button' onClick={() => { deleteUser(val) }}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
export default User1