import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const User3 = () => {
    const [persions, setpersions] = useState({
        id: "",
        univercity: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avarageCpi: "",
        semister: "",
        experiance: "",
        blog: "",
    });


    const [data, setdata] = useState([]);

    useEffect(() => {
       getAllUsers()
    }, []);
    const [isedit, setisedit] = useState(false);

    const handleChange = (e) => {
        var newpersions = { ...persions }
        newpersions[e.target.name] = e.target.value
        setpersions(newpersions)
    }
    const getAllUsers=()=>{
        axios.get("http://localhost:3005/User3/").then((response)=>{
            console.log(response.data)
            setdata(response.data)
        })
    }
    const addUser = () => {
            axios.post("http://localhost:3005/User3/",persions).then((res)=>{
                getAllUsers()
                clearForm()
            })
    }
    const clearForm=()=>{
        setpersions({
            id: "",
            univercity: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            avarageCpi: "",
            semister: "",
            experiance: "",
            blog: "",
        })
    }
    const editUser=(val)=>{
        setisedit(true)
              setpersions(val)
              
    }
    const delUser=(val)=>{
         axios.delete("http://localhost:3005/User3/"+val.id).then((res)=>{
            getAllUsers()
         })
    }
    const updateUser=()=>{
        axios.put("http://localhost:3005/User3/"+persions.id,persions).then((res)=>{
            setisedit(false)
            getAllUsers()
            clearForm()
            
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="">ID : </label>
                <input type="text" name="id" value={persions.id} onChange={(e) => { handleChange(e) }} disabled /><br />
                <label htmlFor="">Univercity : </label>
                <input type="text" name="univercity" value={persions.univercity} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="">Institute : </label>
                <input type="text" name="institute" value={persions.institute} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="">Branch : </label>
                <select name="branch" value={persions.branch} onChange={(e) => { handleChange(e) }}>

                    <option>Select</option>
                    <option>Cse</option>
                    <option>Ece</option>
                    <option>EEE</option>
                    <option>Mechanical</option>
                    <option>IT</option>
                </select><br />
                <label htmlFor="">Degree : </label>
                <select name="degree" value={persions.degree} onChange={(e) => { handleChange(e) }}>
                    <option>select</option>
                    <option>B.sc</option>
                    <option>B.com</option>
                    <option>Bzc</option>
                </select><br />

                <div onChange={(e) => { handleChange(e) }}>
                    <input type="radio" name="status" value="persuing" checked={persions.status === "persuing"} />persuing
                    <input type="radio" name="status" value="completed" checked={persions.status === "completed"} />completed
                </div>

                <label htmlFor="">avarage CPI : </label>
                <input type="number" name="avarageCpi" value={persions.avarageCpi} onChange={(e) => { handleChange(e) }} />upto


                <input type="number" name="semister" value={persions.semister} onChange={(e) => { handleChange(e) }} />
                <label htmlFor="">: Th Semister </label><br />

                <label htmlFor="">Experiance : </label>
                <input type="number" name="experiance" value={persions.experiance} onChange={(e) => { handleChange(e) }} />years<br />
                <label htmlFor="">Your Website or Blog : </label>

                <input type="text" name="blog" value={persions.blog} onChange={(e) => { handleChange(e) }} /><br />
                {isedit ? <button type="button" className="btn btn-info" onClick={updateUser}>UpdateUser</button>: 
                        <button type="button" onClick={addUser}>add USer</button>}

                {/* <button type="button" onClick={addUser}>add USer</button> */}
            </form>
            <table className="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Univercity</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>status</th>
                            <th>AvarageCPI </th>
                            <th>ThSemister </th>
                            <th>Experiance</th>
                            <th>YourWebsiteorBlog</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((val,i)=>
                            <tr key={i}>
                                <th>{val.id}</th>
                                <td>{val.univercity}</td>
                                <td>{val.institute}</td>
                                <td>{val.branch}</td>
                                <td>{val.degree}</td>
                                <td>{val.persuing1}</td>
                                <td>{val.avarageCpi}</td>
                                <td>{val.semister}</td>
                                <td>{val.experiance}</td>
                                <td>{val.blog}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={()=>{editUser(val,i)}}>Edit</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={()=>{delUser(val,i)}}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                       </table>
        </div>
    )
}
export default User3