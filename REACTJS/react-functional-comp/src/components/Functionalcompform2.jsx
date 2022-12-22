import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const User2 = () => {
    const [persion, setpersion] = useState({
        id: "",
        username: "",
        password: "",
        emailaddress: "",
        gender: "",
        dob: "",
        height: "",
    });
    const [data, setdate] = useState([])
    useEffect(() => {
        getAllUsers()
    }, []);


    const [isedit, setisEdit] = useState(false);

    const handileChange = (e) => {
        var newpersion = { ...persion }
        newpersion[e.target.name] = e.target.value
        setpersion(newpersion)
    }
    const getAllUsers = () => {
        axios.get("http://localhost:3005/User2/").then((response) => {
            console.log(response.data);
            setdate(response.data)
        })
    }

    const addUser = () => {
        axios.post("http://localhost:3005/User2/", persion).then((res) => {
            getAllUsers()
            clearForm()
        })
    }
    const clearForm=()=>{
        setpersion({
            id: "",
            username: "",
            password: "",
            emailaddress: "",
            gender: "",
            dob: "",
            height: "",
        })
    }
    const delUser=(val)=>{
           axios.delete("http://localhost:3005/User2/"+val.id).then((res)=>{
            getAllUsers()
           })
    }
    const Edituser=(val)=>{
            setisEdit(true)
            setpersion(val)
    }
    const updateUser=()=>{
        axios.put("http://localhost:3005/User2/"+persion.id,persion).then((res)=>{
            getAllUsers()
            setisEdit(false)
            clearForm()
            
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="">Id : </label>
                <input type="text" name="id" value={persion.id} onChange={(e) => { handileChange(e) }} disabled /><br />
                <label htmlFor="">UserName : </label>
                <input type="text" name="username" value={persion.username} onChange={(e) => { handileChange(e) }} /><br />
                <label htmlFor="">Password : </label>
                <input type="password" name="password" value={persion.password} onChange={(e) => { handileChange(e) }} /><br />
                <label htmlFor="">Emailaddress : </label>
                <input type="email" name="emailaddress" value={persion.emailaddress} onChange={(e) => { handileChange(e) }} /><br />
                <select name="gender" value={persion.gender} onChange={(e) => { handileChange(e) }}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                </select><br />
                <label htmlFor="">Date : </label>
                <input type="date" name="dob" value={persion.dob} onChange={(e) => { handileChange(e) }} /><br />
                <label htmlFor="">Height : </label>
                <input type="number" name="height" value={persion.height} onChange={(e) => { handileChange(e) }} /><br />
                {isedit ? (<button type="button" className=" btn btn-primary" onClick={updateUser}>UpdateUser</button>
                ) : (
                    <button type="button" className="btn btn-secondary" onClick={addUser}>AddUser</button>)}

                {/* <button type="button" onClick={addUser}>AddUser</button> */}

            </form>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th >username</th>
                        <th >password</th>
                        <th >Emailaddress</th>
                        <th >gender</th>
                        <th >DOB</th>
                        <th >height</th>
                        <th >Edit</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, i) =>
                        <tr key={i}>
                            <td>{val.id}</td>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                            <td>{val.emailaddress}</td>
                            <td>{val.gender}</td>
                            <td>{val.dob}</td>
                            <td>{val.height}</td>
                            <td>
                                <button type="button" className="btn btn-warning" onClick={() => {Edituser(val, i) }}>Edit</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => {delUser(val, i) }}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default User2