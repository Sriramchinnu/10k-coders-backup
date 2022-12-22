import axios from "axios";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
const User4=()=>{
    const [persions, setpersions] = useState({
        id: "",
        street: "",
        city: "",
        State1: "",
        zipcode: "",
        country: "",
    });
    const [data, setdata] = useState([]);
    const [edit, setedit] = useState(false);
    useEffect(() => {
      getAllUsers()
    }, []);

    const handleChange=(e)=>{
        var newallpersions={...persions}
        newallpersions[e.target.name]=e.target.value
        setpersions(newallpersions)
    }
    const getAllUsers=()=>{
        axios.get("http://localhost:3005/User4/").then((res)=>{
            setdata(res.data)
        })
    }
    const addUser=()=>{
        axios.post("http://localhost:3005/User4/",persions).then((res)=>{
            getAllUsers()
            clearForm()
        })
    }
    const clearForm=()=>{
        setpersions({
            id: "",
            street: "",
            city: "",
            State1: "",
            zipcode: "",
            country: "",
        })
    }
    const editUser=(val)=>{
         setedit(true) 
         setpersions(val)
    }
    const delUser=(val)=>{
axios.delete("http://localhost:3005/User4/"+val.id).then((res)=>{
    getAllUsers()
})
    }
    const updateUser=()=>{
        axios.put("http://localhost:3005/User4/"+persions.id,persions).then((res)=>{
            getAllUsers()
            setedit(false)
            clearForm()
        })
    }

    return (
        <div>
<form>
                    <label>ID : </label>
                    <input type="text" name="id" value={persions.id} onChange={(e) => {handleChange(e) }} disabled /><br />
                    <label>Street : </label>
                    <input type="text" name="street" value={persions.street} onChange={(e) => {handleChange(e) }} /><br />
                    <label>city,State1 : </label>
                    <input type="text" name="city" value={persions.city} onChange={(e) => {handleChange(e) }} />&nbsp;
                    <input type="text" name="State1" value={persions.State1} onChange={(e) => {handleChange(e) }} style={{ width: "30px" }} /><br />
                    <label>Zipcode : </label>
                    <input type="text" name="zipcode" value={persions.zipcode} onChange={(e) => {handleChange(e) }} /><br />
                    <label>country : </label>
                    <input type="text" name="country" value={persions.country} onChange={(e) => {handleChange(e) }} /><br />

                    {edit ? <button type='button' onClick={updateUser} className="btn btn-info">UpdateUSer</button> 
                    : <button type='button' onClick={addUser} className="btn btn-secondary">addUser</button>}


{/* 
                    <button type='button' onClick={addUser} className="btn btn-secondary">addUser</button> */}
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th >Street</th>
                            <th >City</th>
                            <th >State</th>
                            <th >Zipcode</th>
                            <th >country</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, i) =>
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.street}</td>
                                <td>{val.city}</td>
                                <td>{val.State1}</td>
                                <td>{val.zipcode}</td>
                                <td>{val.country}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => {editUser(val, i) }}>Edit</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => {delUser(val, i) }}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
        </div>
    )
}
export default User4